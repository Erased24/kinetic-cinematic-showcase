import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chetan Jagtap — Motion Graphics & Video Editor" },
      {
        name: "description",
        content:
          "Portfolio of Chetan Jagtap — motion graphics designer and video editor specializing in Adobe After Effects, financial explainers, and cinematic brand content.",
      },
      { property: "og:title", content: "Chetan Jagtap — Motion Graphics & Video Editor" },
      {
        property: "og:description",
        content: "Motion. Story. Impact. Cinematic motion graphics & video editing.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;1,400;1,700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
