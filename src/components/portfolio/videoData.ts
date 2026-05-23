export type VideoCategory = "Motion Graphics" | "Financial Videos" | "Factual Content" | "Other";

export interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  thumbnail: string;
  videoUrl: string; // YouTube embed, Vimeo embed, or direct video URL
  description?: string;
}

// 👋 Chetan — edit this list to add/remove portfolio videos.
// For YouTube use: https://www.youtube.com/embed/VIDEO_ID
// For Vimeo use:   https://player.vimeo.com/video/VIDEO_ID
export const videos: VideoItem[] = [
  {
    id: "1",
    title: "Comp 1 - Motion Composition",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80",
    videoUrl: "/videos/comp-1.mp4",
    description: "Dynamic motion graphics composition showcasing visual storytelling techniques.",
  },
  {
    id: "2",
    title: "Personal Finance Explainer",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80",
    videoUrl: "/videos/personal-finance-2-2.mp4",
    description: "Short-form financial content explaining personal finance concepts.",
  },
  {
    id: "3",
    title: "Factual Content Series",
    category: "Factual Content",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80",
    videoUrl: "/videos/fact-2-2.mp4",
    description: "Educational factual content with engaging visual presentation.",
  },
  {
    id: "4",
    title: "Factual Video Documentary",
    category: "Factual Content",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    videoUrl: "/videos/factual-video-4.mp4",
    description: "Documentary-style factual video with cinematic editing.",
  },
  {
    id: "5",
    title: "Personal Finance Series",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    videoUrl: "/videos/personal-finance-4.mp4",
    description: "Financial education content in short-form video format.",
  },
  {
    id: "6",
    title: "Siddhicee Project",
    category: "Other",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80",
    videoUrl: "/videos/siddhicee-p2.mp4",
    description: "Portfolio project showcasing creative video editing and motion design.",
  },
];
