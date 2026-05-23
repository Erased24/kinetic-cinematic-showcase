import { useEffect, useState } from "react";

const tagline = ["Motion.", "Story.", "Impact."];

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden noise-bg grid-bg"
    >
      {/* Animated orbs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--amber), transparent 70%)",
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--cyan), transparent 70%)",
          transform: `translate(${-mouse.x}px, ${-mouse.y}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-12">
        <div className="mb-8 flex items-center gap-3 fade-up">
          <span className="h-2 w-2 rounded-full bg-[var(--amber)] pulse-dot" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Motion Designer · Video Editor · Mumbai
          </span>
        </div>

        <h1 className="font-display text-[18vw] leading-[0.85] md:text-[14vw] lg:text-[12rem]">
          <span className="block reveal" style={{ animationDelay: "0.1s" }}>
            CHETAN
          </span>
          <span
            className="block text-gradient-amber reveal"
            style={{ animationDelay: "0.35s" }}
          >
            JAGTAP
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          {tagline.map((word, i) => (
            <span
              key={word}
              className="font-serif text-3xl italic text-foreground/90 fade-up md:text-5xl"
              style={{ animationDelay: `${0.8 + i * 0.18}s` }}
            >
              {word}
            </span>
          ))}
        </div>

        <p
          className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground fade-up md:text-lg"
          style={{ animationDelay: "1.5s" }}
        >
          A motion graphics artist & video editor crafting cinematic stories with
          Adobe After Effects — from financial explainers to brand-defining reels.
        </p>

        <div
          className="mt-12 flex flex-wrap gap-4 fade-up"
          style={{ animationDelay: "1.7s" }}
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--amber)] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[var(--primary-foreground)] transition-all hover:glow-amber"
          >
            View Reel
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm font-medium uppercase tracking-widest transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
        <div className="flex flex-col items-center gap-3">
          <span>Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-[var(--amber)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
