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
import { Grain } from "../components/Grain";
import { CursorBlob } from "../components/CursorBlob";
import { LenisProvider } from "../components/Lenis";
import { Toaster } from "../components/ui/sonner";
import { SkewButton } from "../components/SkewButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-[10rem] leading-none tracking-tighter font-bold text-[#d4ff00] italic">404</p>
        <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tighter text-white">Off the rizz map.</h2>
        <p className="mt-2 text-sm text-white/50">This page never had any aura to begin with.</p>
        <Link to="/" className="mt-6 inline-block">
          <SkewButton>Go home</SkewButton>
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
        <h1 className="font-display text-3xl font-bold uppercase tracking-tighter text-white">That fumbled.</h1>
        <p className="mt-2 text-sm text-white/50">Something broke on our end. Try again?</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <SkewButton onClick={() => { router.invalidate(); reset(); }}>Try again</SkewButton>
          <a href="/"><SkewButton variant="outline">Go home</SkewButton></a>
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
      { name: "description", content: "Biometric analysis of your social frequency. Get your Rizz Identity Card, find your zodiac match, and dominate the Arena." },
      { name: "theme-color", content: "#050505" },
      { property: "og:title", content: "HaveRizz — Do You Actually Have Rizz?" },
      { property: "og:description", content: "The definitive charisma diagnostic for the digital age." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" },
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
      <body className="min-h-screen bg-background text-foreground antialiased">
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
      <LenisProvider>
        <div className="relative min-h-screen overflow-x-hidden">
          <MeshBackdrop />
          <Grain />
          <CursorBlob />
          <GlassNav />
          <main className="relative z-10">
            <Outlet />
          </main>
          <CoffeeFab />
          <Toaster theme="dark" position="top-center" />
        </div>
      </LenisProvider>
    </QueryClientProvider>
  );
}
