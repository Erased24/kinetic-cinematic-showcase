export type VideoCategory = "Motion Graphics" | "Financial Videos" | "Other";

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
    title: "Brand Identity Reel",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A kinetic typography reel exploring brand storytelling.",
  },
  {
    id: "2",
    title: "Quarterly Earnings Explainer",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Animated financial data visualization for investor reports.",
  },
  {
    id: "3",
    title: "Logo Animation Pack",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Crypto Market Breakdown",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Product Launch Teaser",
    category: "Other",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Investment Strategy Series",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "7",
    title: "Abstract Motion Study",
    category: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "8",
    title: "Documentary Title Sequence",
    category: "Other",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "9",
    title: "Banking App Promo",
    category: "Financial Videos",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
