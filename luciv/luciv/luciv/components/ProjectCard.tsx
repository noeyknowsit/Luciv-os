"use client";

import { useRef, useState } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const canPlayVideo = project.video && videoReady && !videoFailed;

  return (
    <div
      className={`group relative overflow-hidden bg-panel ${className}`}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.cover}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          canPlayVideo ? "opacity-0" : "opacity-100"
        }`}
      />

      {project.video && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            canPlayVideo ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          <source src={project.video} type="video/mp4" />
        </video>
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0) 55%, rgba(10,10,10,0.82) 100%)",
        }}
      />

      <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 md:min-h-[340px] md:p-8">
        <p className="text-xs font-medium uppercase tracking-wide3 text-steel">
          {project.industry}
        </p>
        <h3 className="mt-2 font-display text-xl font-medium text-paper md:text-2xl">
          {project.client}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}
