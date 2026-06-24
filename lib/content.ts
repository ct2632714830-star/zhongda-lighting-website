import {
  BadgeCheck,
  Boxes,
  CircleDot,
  DraftingCompass,
  Gem,
  Globe2,
  Hammer,
  Hotel,
  Layers3,
  Lightbulb,
  PackageCheck,
  PenTool,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Truck,
  Wand2
} from "lucide-react";

export const images = {
  hero:
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=85",
  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
  banquet:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
  villa:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
  lounge:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=85",
  commercial:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
  chandelier:
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=85",
  factory:
    "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1600&q=85",
  founder:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
};

export const projects = [
  {
    title: "Luxury Hotel Lobby",
    scene: "Hospitality Lighting",
    image: images.hotel,
    text: "A layered chandelier composition designed to anchor arrival, scale, and quiet ceremony."
  },
  {
    title: "Banquet Hall",
    scene: "Event & Ballroom",
    image: images.banquet,
    text: "Custom decorative lighting calibrated for grandeur, dimming scenes, and repeatable operations."
  },
  {
    title: "Private Villa",
    scene: "Residential Bespoke",
    image: images.villa,
    text: "Warm architectural pieces shaped around proportion, privacy, and material tactility."
  },
  {
    title: "Restaurant & Lounge",
    scene: "Lifestyle Space",
    image: images.lounge,
    text: "Atmospheric fixtures that hold intimacy, rhythm, and brand memory throughout the evening."
  },
  {
    title: "Commercial Space",
    scene: "Architectural Feature",
    image: images.commercial,
    text: "Project lighting developed for circulation, visual identity, and long-term maintenance."
  },
  {
    title: "Custom Chandelier Project",
    scene: "Signature Installation",
    image: images.chandelier,
    text: "A bespoke focal piece translated from concept into engineered, buildable detail."
  }
];

export const process = [
  ["Concept & Requirement", CircleDot],
  ["Design Development", PenTool],
  ["3D Visualization", Layers3],
  ["Material & Finish Confirmation", Gem],
  ["Sampling", Sparkles],
  ["Production", Hammer],
  ["Quality Inspection", ShieldCheck],
  ["Packing & Delivery", PackageCheck],
  ["Installation Support", DraftingCompass]
] as const;

export const capabilities = [
  ["Custom chandelier manufacturing", Wand2],
  ["Metal processing", Hammer],
  ["Crystal / glass / acrylic / alabaster application", Gem],
  ["Surface finishing", Sparkles],
  ["Lighting control system", SlidersHorizontal],
  ["DALI / dimming solutions", Lightbulb],
  ["Engineering drawings", DraftingCompass],
  ["Quality inspection", BadgeCheck],
  ["Global delivery", Truck],
  ["Project coordination", Globe2],
  ["Material sourcing", Boxes],
  ["Hospitality standards", Hotel]
] as const;

export const philosophy = [
  {
    title: "Light as Atmosphere",
    text: "Lighting is not only about brightness. It defines mood, depth, rhythm, and emotional memory."
  },
  {
    title: "Design with Restraint",
    text: "True luxury is quiet. Every proportion, material, and finish should serve the space, not overwhelm it."
  },
  {
    title: "From Manufacturing to Creation",
    text: "We combine production capability with project understanding, turning drawings and concepts into buildable lighting solutions."
  },
  {
    title: "Global Vision, Project Discipline",
    text: "We serve international projects with a focus on communication, detail control, quality, and delivery."
  }
];
