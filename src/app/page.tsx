import { Button } from "@/components/ui/button";
import { clientEnv } from "@/lib/env/client";

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <section
        aria-labelledby="page-title"
        className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]"
      >
        <div className="max-w-3xl space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-primary">
              Next.js frontend foundation
            </p>

            <h1
              id="page-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              A clean foundation for a production-ready frontend.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              The application shell is built with Next.js App Router,
              TypeScript, Tailwind CSS, shadcn/ui, and a small set of focused
              frontend primitives.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>
              <a href="#foundation">View foundation</a>
            </Button>
          </div>
        </div>

        <aside
          id="foundation"
          aria-label="Foundation configuration"
          className="rounded-xl border bg-card p-6 shadow-sm"
        >
          <h2 className="font-semibold">Configuration</h2>

          <dl className="mt-4 space-y-4 text-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <dt className="text-muted-foreground">Framework</dt>
              <dd className="font-medium">Next.js</dd>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <dt className="text-muted-foreground">Rendering</dt>
              <dd className="font-medium">App Router</dd>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <dt className="text-muted-foreground">API</dt>
              <dd className="break-all font-medium">
                {clientEnv.NEXT_PUBLIC_API_URL}
              </dd>
            </div>
          </dl>
        </aside>
      </section>
    </div>
  );
}
