export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading page"
      className="mx-auto flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-foreground"
        />

        <span>Loading...</span>
      </div>
    </main>
  );
}
