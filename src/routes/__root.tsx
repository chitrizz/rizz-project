import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { GlassNav } from "../components/GlassNav";
import { MeshBackdrop } from "../components/MeshBackdrop";
import { CoffeeFab } from "../components/CoffeeFab";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-[8rem] leading-none tracking-tighter text-gradient">404</p>
        <h2 className="mt-2 font-display text-xl font-semibold text-zinc-50">Off the rizz map.</h2>
        <p className="mt-2 text-sm text-zinc-500">This page never had any aura to begin with.</p>
        <Link
          to="/"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-brand-purple px-5 text-sm font-medium text-white hover:brightness-110 transition"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-zinc-50">That fumbled.</h1>
        <p className="mt-2 text-sm text-zinc-500">Something broke on our end. Try again?</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="h-10 rounded-full bg-brand-purple px-5 text-sm font-medium text-white hover:brightness-110 transition"
          >
            Try again
          </button>
          <a href="/" className="h-10 rounded-full glass ring-1 ring-white/10 px-5 text-sm font-medium text-zinc-50 flex items-center hover:bg-white/10 transition">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HaveRizz — Do You Actually Have Rizz?" },
      { name: "description", content: "Test your charisma, get your official Rizz Identity Card, find your zodiac match, and dominate the Arena." },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:title", content: "HaveRizz — Do You Actually Have Rizz?" },
      { property: "og:description", content: "The first scientifically accurate charisma diagnostic for the digital age." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen overflow-x-hidden">
        <MeshBackdrop />
        <GlassNav />
        <main className="relative z-10">
          <Outlet />
        </main>
        <CoffeeFab />
        <Toaster theme="dark" position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
