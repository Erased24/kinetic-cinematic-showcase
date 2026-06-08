import elonMusk from "@/assets/videos/elon-musk.mp4.asset.json";
import pf6 from "@/assets/videos/personal-finance-6.mp4.asset.json";
import pf4 from "@/assets/videos/personal-finance-4.mp4.asset.json";
import pf22 from "@/assets/videos/personal-finance-2-2.mp4.asset.json";
import challenge4 from "@/assets/videos/challenge-4.mp4.asset.json";
import siddhicee from "@/assets/videos/siddhicee-p2.mp4.asset.json";

export type VideoCategory = "Motion Graphics" | "Financial Videos" | "Short Form" | "Other";

export interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  thumbnail: string;
  videoUrl: string;
  description?: string;
}

// 👋 Chetan — edit this list to add/remove portfolio videos.
export const videos: VideoItem[] = [
  {
    id: "mg-1",
    title: "Elon Musk",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    videoUrl: elonMusk.url,
    description: "Motion graphics piece featuring Elon Musk.",
  },
  {
    id: "fin-1",
    title: "Personal Finance 6",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    videoUrl: pf6.url,
    description: "Personal finance explainer with dynamic motion design.",
  },
  {
    id: "fin-2",
    title: "Personal Finance 4",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80",
    videoUrl: pf4.url,
    description: "Financial education content in short-form video format.",
  },
  {
    id: "fin-3",
    title: "Personal Finance 2",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    videoUrl: pf22.url,
    description: "Short-form financial content explaining personal finance concepts.",
  },
  {
    id: "sf-1",
    title: "Challenge 4",
    category: "Short Form",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80",
    videoUrl: challenge4.url,
    description: "Short-form challenge edit with punchy pacing.",
  },
  {
    id: "sf-2",
    title: "Siddhicee",
    category: "Short Form",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80",
    videoUrl: siddhicee.url,
    description: "Short-form content showcasing creative video editing and motion design.",
  },
];
