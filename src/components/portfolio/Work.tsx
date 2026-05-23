import { useMemo, useState } from "react";
import { videos, type VideoCategory, type VideoItem } from "./videoData";
import { VideoLightbox } from "./VideoLightbox";

const FILTERS = ["All", "Motion Graphics", "Financial Videos", "Other"] as const;
type Filter = (typeof FILTERS)[number];

export function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<VideoItem | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? videos
        : videos.filter((v) => v.category === (filter as VideoCategory)),
    [filter]
  );

  return (
    <section id="work" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--amber)]">
              02 — Selected Work
            </span>
            <h2 className="mt-6 font-display text-6xl md:text-8xl">
              The <span className="text-gradient-amber">reel.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-widest transition-all ${
                  filter === f
                    ? "border-[var(--amber)] bg-[var(--amber)] text-[var(--primary-foreground)]"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActive(v)}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-card text-left fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <img
                src={v.thumbnail}
                alt={v.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity group-hover:opacity-70" />

              {/* Play icon */}
              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--amber)]/40 bg-background/40 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-[var(--amber)] group-hover:text-[var(--primary-foreground)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--cyan)]">
                  {v.category}
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-[var(--amber)] md:text-3xl">
                  {v.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-20 text-center text-muted-foreground">No videos in this category yet.</p>
        )}
      </div>

      <VideoLightbox video={active} onClose={() => setActive(null)} />
    </section>
  );
}
