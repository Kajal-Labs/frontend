"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  readonly error: Error & {
    readonly digest?: string;
  };
  readonly reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center justify-center px-4 py-10 text-center sm:px-6 lg:px-8">
      <section aria-labelledby="error-title" className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-destructive">
            Something went wrong
          </p>

          <h1
            id="error-title"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            We couldn&apos;t load this page.
          </h1>

          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            Please try again. If the problem continues, come back later.
          </p>
        </div>

        <Button type="button" onClick={reset}>
          Try again
        </Button>
      </section>
    </main>
  );
}
