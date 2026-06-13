import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableRuntime =
  process.env.LOVABLE_SANDBOX === "1" || Boolean(process.env.DEV_SERVER__PROJECT_PATH);

export default defineConfig({
  // External builds need an explicit adapter. Nitro emits Vercel's Build Output API
  // structure, while Lovable's own build continues to select its managed runtime.
  nitro: { preset: "vercel" },
  tanstackStart: isLovableRuntime ? { server: { entry: "server" } } : undefined,
  vite: {
    publicDir: "public",
  },
});
