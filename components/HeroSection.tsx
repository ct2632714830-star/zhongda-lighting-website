"use client";

import { useEffect, useRef, useState } from "react";
import { CTAButtons } from "@/components/CTAButtons";
import { HeaderOverlay } from "@/components/HeaderOverlay";
import { HeroVideo } from "@/components/HeroVideo";
import { OverlayGradient } from "@/components/OverlayGradient";
import { RankPanel } from "@/components/RankPanel";
import { StatsPanel } from "@/components/StatsPanel";

const UI_REVEAL_SECONDS = 5;

const playerProfile = {
  id: "crisistb7#4719",
  cityCn: "深圳",
  cityEn: "SHENZHEN",
  videoSrc: "/videos/hero-4k-clean.mp4",
  posterSrc: "/videos/hero-4k-poster.jpg",
  rank: {
    eyebrow: "CURRENT RANK",
    rankName: "IMMORTAL 3",
    rr: "RR 326",
    region: "CN / Shenzhen",
    peakRank: "IMMORTAL 3 · RR 512",
    season: "EPISODE 8 // ACT 2"
  },
  stats: {
    winRate: "68%",
    kd: "1.42",
    hs: "31%",
    acs: "248",
    mvp: "12",
    lastMatch: "13 / 7 / 4",
    updated: "UPDATED 2 MIN AGO"
  }
};

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const revealTimerRef = useRef<number | null>(null);
  const [showUI, setShowUI] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setShowUI(true);
    }, UI_REVEAL_SECONDS * 1000);

    return () => {
      window.clearTimeout(fallbackTimer);

      if (revealTimerRef.current) {
        window.clearTimeout(revealTimerRef.current);
      }
    };
  }, []);

  function handleTimeUpdate() {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    if (video.currentTime >= UI_REVEAL_SECONDS) {
      setShowUI(true);
    }
  }

  function handleEnded() {
    const video = videoRef.current;

    if (video) {
      video.pause();
    }

    setShowUI(true);
  }

  function handleLoadedMetadata() {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    if (revealTimerRef.current) {
      window.clearTimeout(revealTimerRef.current);
    }

    revealTimerRef.current = window.setTimeout(() => {
      setShowUI(true);
    }, Math.max(0, UI_REVEAL_SECONDS - video.currentTime) * 1000);
  }

  function handleCanPlay() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.play().catch(() => {
      window.setTimeout(() => setShowUI(true), UI_REVEAL_SECONDS * 1000);
    });
  }

  function handlePause() {
    const video = videoRef.current;

    if (video && !video.ended && video.currentTime > 0.5) {
      window.setTimeout(() => setShowUI(true), Math.max(0, UI_REVEAL_SECONDS - video.currentTime) * 1000);
    }
  }

  return (
    <main className="h-screen overflow-hidden bg-[#eef2f5] text-white">
      <section className="relative isolate h-screen min-h-[640px] overflow-hidden bg-[#e9eef3]">
        <HeroVideo
          ref={videoRef}
          src={playerProfile.videoSrc}
          poster={playerProfile.posterSrc}
          failed={videoFailed}
          onError={() => {
            setVideoFailed(true);
            setShowUI(true);
          }}
          onEnded={handleEnded}
          onCanPlay={handleCanPlay}
          onLoadedMetadata={handleLoadedMetadata}
          onPause={handlePause}
          onTimeUpdate={handleTimeUpdate}
        />
        <OverlayGradient />

        <div className="pointer-events-none absolute inset-0 z-20">
          <HeaderOverlay
            show={showUI}
            playerId={playerProfile.id}
            cityCn={playerProfile.cityCn}
            cityEn={playerProfile.cityEn}
          />

          <div className="absolute inset-x-0 top-[18vh] hidden h-[62vh] items-center justify-between px-6 md:flex lg:px-14 xl:px-[4.6vw]">
            <RankPanel show={showUI} data={playerProfile.rank} />
            <StatsPanel show={showUI} data={playerProfile.stats} />
          </div>

          <div className="absolute inset-x-0 bottom-24 hidden justify-center md:flex">
            <CTAButtons show={showUI} />
          </div>

          <div className="absolute inset-x-4 bottom-5 flex flex-col gap-3 md:hidden">
            <div className="grid gap-3">
              <RankPanel show={showUI} data={playerProfile.rank} compact />
              <StatsPanel show={showUI} data={playerProfile.stats} compact />
            </div>
            <CTAButtons show={showUI} compact />
          </div>
        </div>
      </section>
    </main>
  );
}
