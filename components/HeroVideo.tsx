"use client";

import { forwardRef } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  failed: boolean;
  onError: () => void;
  onEnded: () => void;
  onCanPlay: () => void;
  onLoadedMetadata: () => void;
  onPause: () => void;
  onTimeUpdate: () => void;
};

export const HeroVideo = forwardRef<HTMLVideoElement, HeroVideoProps>(function HeroVideo(
  { src, poster, failed, onError, onEnded, onCanPlay, onLoadedMetadata, onPause, onTimeUpdate },
  ref
) {
  return (
    <div className="absolute inset-0 z-0 bg-[#e8edf2]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      />

      {!failed ? (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover object-[54%_center] md:object-[58%_center] lg:object-center"
          src={src}
          poster={poster}
          autoPlay
          muted
          playsInline
          preload="auto"
          onError={onError}
          onEnded={onEnded}
          onCanPlay={onCanPlay}
          onLoadedMetadata={onLoadedMetadata}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
        />
      ) : null}
    </div>
  );
});
