import { clientEnv } from "@/lib/env/client";
import { ApiError, getApiErrorKind } from "@/lib/api/errors";

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  readonly body?: unknown;
};

async function parseResponseBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    return null;
  }

  try {
    return await response.json();
  } catch {
    return null;
  }
}

function getErrorMessage(body: unknown, status: number): string {
  if (typeof body === "object" && body !== null && "message" in body) {
    const message = body.message;

    if (typeof message === "string") {
      return message;
    }

    if (Array.isArray(message)) {
      const messages = message.filter(
        (item): item is string => typeof item === "string",
      );

      if (messages.length > 0) {
        return messages.join(", ");
      }
    }
  }

  if (status >= 500) {
    return "The server encountered an unexpected error.";
  }

  return "The request could not be completed.";
}

function createRequestInit(options: ApiRequestOptions): RequestInit {
  const headers = new Headers(options.headers);

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (options.body !== undefined && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return {
    ...options,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    credentials: options.credentials ?? "same-origin",
    headers,
  };
}

export async function apiClient<TResponse>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<TResponse> {
  const url = new URL(path, `${clientEnv.NEXT_PUBLIC_API_URL}/`);

  let response: Response;

  try {
    response = await fetch(url, createRequestInit(options));
  } catch (error) {
    throw new ApiError({
      status: null,
      kind: "network",
      message:
        error instanceof Error ? error.message : "Unable to reach the API.",
      details: null,
    });
  }

  const body = await parseResponseBody(response);

  if (!response.ok) {
    throw new ApiError({
      status: response.status,
      kind: getApiErrorKind(response.status),
      message: getErrorMessage(body, response.status),
      details: body,
    });
  }

  return body as TResponse;
}

export function apiGet<TResponse>(
  path: string,
  options: Omit<ApiRequestOptions, "method" | "body"> = {},
): Promise<TResponse> {
  return apiClient<TResponse>(path, {
    ...options,
    method: "GET",
  });
}

export function apiPost<TResponse>(
  path: string,
  body: unknown,
  options: Omit<ApiRequestOptions, "method" | "body"> = {},
): Promise<TResponse> {
  return apiClient<TResponse>(path, {
    ...options,
    method: "POST",
    body,
  });
}

export function apiPatch<TResponse>(
  path: string,
  body: unknown,
  options: Omit<ApiRequestOptions, "method" | "body"> = {},
): Promise<TResponse> {
  return apiClient<TResponse>(path, {
    ...options,
    method: "PATCH",
    body,
  });
}

export function apiPut<TResponse>(
  path: string,
  body: unknown,
  options: Omit<ApiRequestOptions, "method" | "body"> = {},
): Promise<TResponse> {
  return apiClient<TResponse>(path, {
    ...options,
    method: "PUT",
    body,
  });
}

export function apiDelete<TResponse>(
  path: string,
  options: Omit<ApiRequestOptions, "method" | "body"> = {},
): Promise<TResponse> {
  return apiClient<TResponse>(path, {
    ...options,
    method: "DELETE",
  });
}
