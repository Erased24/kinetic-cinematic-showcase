const skills = [
  "After Effects",
  "Premiere Pro",
  "Motion Graphics",
  "Kinetic Typography",
  "Financial Data Viz",
  "Animation",
  "Color Grading",
  "Sound Design",
  "Storyboarding",
  "Photoshop",
  "Illustrator",
  "Cinema 4D Lite",
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-border py-24">
      <div className="mx-auto mb-12 max-w-7xl px-6 md:px-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--amber)]">
          03 — Toolkit
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="marquee flex shrink-0 items-center gap-12 pr-12">
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span className="font-display text-5xl text-foreground/80 transition-colors hover:text-[var(--amber)] md:text-7xl">
                {skill}
              </span>
              <span className="h-2 w-2 rounded-full bg-[var(--cyan)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
