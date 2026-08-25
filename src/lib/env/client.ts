import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.url(),
  NEXT_PUBLIC_APP_URL: z.url(),
});

const parsedClientEnv = clientEnvSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

if (!parsedClientEnv.success) {
  console.error(
    "Invalid client environment configuration:",
    parsedClientEnv.error.flatten().fieldErrors,
  );

  throw new Error("Invalid client environment configuration.");
}

export const clientEnv = parsedClientEnv.data;
