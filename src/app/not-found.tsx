import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center justify-center px-4 py-10 text-center sm:px-6 lg:px-8">
      <section aria-labelledby="not-found-title" className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">404</p>

          <h1
            id="not-found-title"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Page not found
          </h1>

          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex min-h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
