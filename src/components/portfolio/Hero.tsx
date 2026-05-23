import { useEffect, useState } from "react";

const tagline = ["Motion.", "Story.", "Impact."];

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden scene-bg grain"
    >
      {/* Soft cinematic orbs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full opacity-40 blur-[120px] float-slow"
        style={{
          background: "radial-gradient(circle, var(--rust), transparent 70%)",
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[640px] w-[640px] rounded-full opacity-30 blur-[140px] float-slower"
        style={{
          background: "radial-gradient(circle, var(--ember), transparent 70%)",
          transform: `translate(${-mouse.x}px, ${-mouse.y}px)`,
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-12">
        <div className="mb-10 flex items-center gap-3 fade-up">
          <span className="h-2 w-2 rounded-full bg-[var(--ember)] pulse-dot" />
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Motion Designer · Video Editor · Mumbai
          </span>
        </div>

        <h1 className="font-display text-[15vw] font-light leading-[1.05] tracking-tight md:text-[12vw] lg:text-[10rem]">
          <span className="block pb-2 reveal" style={{ animationDelay: "0.1s" }}>
            Chetan
          </span>
          <span
            className="block pb-4 italic text-gradient-ember reveal"
            style={{ animationDelay: "0.35s", fontWeight: 400 }}
          >
            Jagtap
          </span>
        </h1>

        <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          {tagline.map((word, i) => (
            <span
              key={word}
              className="font-serif text-4xl text-foreground/95 fade-up md:text-6xl"
              style={{ animationDelay: `${0.85 + i * 0.18}s` }}
            >
              {word}
            </span>
          ))}
        </div>

        <p
          className="mt-12 max-w-xl text-base leading-relaxed text-muted-foreground fade-up md:text-lg"
          style={{ animationDelay: "1.55s" }}
        >
          A motion graphics artist & video editor crafting cinematic stories
          inside Adobe After Effects — from financial explainers to
          brand-defining reels.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-4 fade-up"
          style={{ animationDelay: "1.75s" }}
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--cream)] px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--primary-foreground)] transition-all hover:bg-[var(--ember)] hover:glow-ember"
          >
            View Reel
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-[var(--cream)] hover:text-[var(--cream)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
        <div className="flex flex-col items-center gap-3">
          <span>Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-[var(--ember)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
