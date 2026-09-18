"use client";

import { useState } from "react";

/**
 * Plays a muted, looping showreel behind the hero. If no video has been
 * placed at /public/videos/hero-reel.mp4 yet, the <video> tag fails to
 * load and we fall back to the static poster image instead of showing a
 * broken player.
 */
export default function HeroMedia() {
  const [videoFailed, setVideoFailed] = useState(false);

  if (videoFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/images/hero-poster.jpg"
        alt="Luciv production still"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      poster="/images/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      onError={() => setVideoFailed(true)}
      aria-hidden="true"
    >
      <source src="/videos/hero-reel.mp4" type="video/mp4" />
    </video>
  );
}
