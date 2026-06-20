import { createStart, createMiddleware } from "@tanstack/react-start";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(
      `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Server Error</title><style>body{background:#050505;color:#fff;font-family:system-ui;display:grid;place-items:center;height:100vh;margin:0}</style></head><body><h1>Server Error</h1><p>Something went wrong. Please try again.</p></body></html>`,
      { status: 500, headers: { "content-type": "text/html; charset=utf-8" } }
    );
  }
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [errorMiddleware],
}));
