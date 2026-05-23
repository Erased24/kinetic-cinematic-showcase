import { useEffect } from "react";
import type { VideoItem } from "./videoData";

interface Props {
  video: VideoItem | null;
  onClose: () => void;
}

function isEmbed(url: string) {
  return /youtube\.com\/embed|player\.vimeo\.com|youtu\.be/.test(url);
}

export function VideoLightbox({ video, onClose }: Props) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-md fade-up md:p-12"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-[var(--ember)] hover:text-[var(--ember)]"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--cream)]">
              {video.category}
            </div>
            <h3 className="mt-1 font-display text-3xl md:text-4xl">{video.title}</h3>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black glow-ember">
          {isEmbed(video.videoUrl) ? (
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video src={video.videoUrl} controls autoPlay className="h-full w-full" />
          )}
        </div>

        {video.description && (
          <p className="mt-4 text-sm text-muted-foreground">{video.description}</p>
        )}
      </div>
    </div>
  );
}
