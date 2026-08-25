import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { AppProviders } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend",
  description: "Production-ready Next.js frontend",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />

            <main className="flex-1">{children}</main>

            <footer className="border-t">
              <div className="mx-auto w-full max-w-7xl px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
                Frontend application
              </div>
            </footer>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
