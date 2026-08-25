export type ApiErrorKind =
  | "validation"
  | "authentication"
  | "authorization"
  | "not_found"
  | "conflict"
  | "server"
  | "network"
  | "unknown";

export interface ApiErrorDetails {
  readonly status: number | null;
  readonly kind: ApiErrorKind;
  readonly message: string;
  readonly details: unknown;
}

export class ApiError extends Error {
  readonly status: number | null;
  readonly kind: ApiErrorKind;
  readonly details: unknown;

  constructor({ status, kind, message, details }: ApiErrorDetails) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.kind = kind;
    this.details = details;
  }
}

export function getApiErrorKind(status: number): ApiErrorKind {
  switch (status) {
    case 400:
    case 422:
      return "validation";

    case 401:
      return "authentication";

    case 403:
      return "authorization";

    case 404:
      return "not_found";

    case 409:
      return "conflict";

    default:
      return status >= 500 ? "server" : "unknown";
  }
}
