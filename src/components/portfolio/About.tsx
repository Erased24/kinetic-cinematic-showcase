export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4">
          <div className="sticky top-32">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--ember)]">
              01 — About
            </span>
            <h2 className="mt-6 font-display text-6xl md:text-7xl">
              The <br />
              <span className="text-gradient-ember">craft.</span>
            </h2>
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="font-serif text-3xl italic leading-tight text-foreground md:text-5xl">
            "Every frame is a decision. Every transition, a sentence."
          </p>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm Chetan — a motion graphics designer and video editor with a
              deep love for storytelling through movement. For the past several
              years I've been crafting motion-led content inside{" "}
              <span className="text-foreground">Adobe After Effects</span>,
              shaping ideas into visuals that feel intentional, cinematic, and
              alive.
            </p>
            <p>
              My work spans{" "}
              <span className="text-[var(--cream)]">financial explainer videos</span>{" "}
              that demystify complex data, brand-led{" "}
              <span className="text-[var(--ember)]">motion graphics</span>, and
              creative content that gives ideas a pulse. I obsess over timing,
              easing, and the small details that make motion feel inevitable.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { num: "150+", label: "Projects shipped" },
              { num: "6+", label: "Years in motion" },
              { num: "40+", label: "Happy clients" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-[var(--ember)] md:text-6xl">
                  {s.num}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
