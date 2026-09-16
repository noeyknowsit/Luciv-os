export type Project = {
  slug: string;
  client: string;
  industry: string;
  description: string;
  /** Path under /public to the cover image (portrait or landscape). */
  cover: string;
  /** Optional path under /public to a short looping video for this project. */
  video?: string;
  /** Layout hint for the editorial grid on desktop. */
  size: "large" | "small";
};

/**
 * Edit this array to add, remove, or reorder Selected Work projects.
 * See /MEDIA.md for exactly where to place each image/video file.
 */
export const projects: Project[] = [
  {
    slug: "ceramic",
    client: "Ceramic Coating Co.",
    industry: "Automotive",
    description:
      "Social-first content for an automotive ceramic coating company.",
    cover: "/work/ceramic/cover.jpg",
    video: "/work/ceramic/clip.mp4",
    size: "large",
  },
  {
    slug: "box-and-ship",
    client: "Box & Ship",
    industry: "Local Service",
    description:
      "Short-form creative designed around the packing process and customer experience.",
    cover: "/work/box-and-ship/cover.jpg",
    video: "/work/box-and-ship/clip.mp4",
    size: "small",
  },
  {
    slug: "hilton-granite-park",
    client: "Hilton Granite Park",
    industry: "Hospitality",
    description:
      "On-site content capturing the property, service and guest experience.",
    cover: "/work/hilton-granite-park/cover.jpg",
    video: "/work/hilton-granite-park/clip.mp4",
    size: "small",
  },
];
