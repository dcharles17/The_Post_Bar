"use client";

import { useState } from "react";
import Image from "next/image";
import RopeDivider from "@/components/RopeDivider";

/*
  Gallery photos — replace src values with real photos from Google Business / Facebook.
  Unsplash placeholder images used for development.
  All images are 800x600 or similar aspect ratios.
*/
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    alt: "Cowboy Burger with loaded toppings",
    caption: "The Cowboy Burger",
    category: "Food",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&q=80",
    alt: "Cold drinks at the bar",
    caption: "Cold & Refreshing",
    category: "Drinks",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    alt: "Loaded fries with queso and jalapeños",
    caption: "Loaded Fries",
    category: "Food",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=800&q=80",
    alt: "Interior of The Post Bar & Grill",
    caption: "Come On In",
    category: "Atmosphere",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    alt: "Juicy smash burger",
    caption: "Steak House Burger",
    category: "Food",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
    alt: "Craft cocktails and drinks",
    caption: "Full Bar",
    category: "Drinks",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80",
    alt: "Crispy chicken tenders",
    caption: "Chicken Tenders",
    category: "Food",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&q=80",
    alt: "Live music night at The Post",
    caption: "Live Music Night",
    category: "Events",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    alt: "Crispy wings with sauce",
    caption: "Wing Wednesday",
    category: "Food",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80",
    alt: "Bar atmosphere with warm lighting",
    caption: "Friday Nights",
    category: "Atmosphere",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1595272568891-123402d0fb3b?w=800&q=80",
    alt: "Nachos with toppings",
    caption: "Nachos",
    category: "Food",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    alt: "Good times at The Post",
    caption: "Good Times",
    category: "Atmosphere",
  },
];

const categories = ["All", "Food", "Drinks", "Atmosphere", "Events"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof photos)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 wood-texture" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(13,7,5,0.8) 0%, rgba(13,7,5,0.5) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
            The Post Bar &amp; Grill
          </p>
          <h1 className="font-rye text-cream text-5xl lg:text-7xl mb-4">Gallery</h1>
          <RopeDivider className="max-w-xs mx-auto mb-4" />
          <p className="font-lato text-leather text-base lg:text-lg">
            A look inside the place Morgan calls home.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-post-dark border-b border-border">
        <div className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-4 font-lato font-bold text-xs tracking-widest uppercase transition-all cursor-pointer border-b-2 ${
                activeCategory === cat
                  ? "text-gold border-gold"
                  : "text-leather border-transparent hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Photo Grid ── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg western-border"
                onClick={() => setLightbox(photo)}
              >
                {/* Image */}
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto block transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
                    style={{ filter: "sepia(20%) contrast(1.05)" }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-post-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="font-lato text-[10px] font-bold tracking-widest uppercase text-gold mb-1">
                    {photo.category}
                  </span>
                  <span className="font-playfair text-cream font-bold text-sm">
                    {photo.caption}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-lato text-[9px] font-bold tracking-widest uppercase bg-post-dark/80 text-gold px-2 py-1 rounded">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <StarIcon className="w-10 h-10 text-gold/30 mx-auto mb-4" />
              <p className="font-lato text-leather">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Facebook CTA ── */}
      <section className="py-14 wood-texture border-t border-border">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="font-playfair text-cream italic text-base mb-3">
            More photos on our Facebook page
          </p>
          <RopeDivider className="mb-5" />
          <a
            href="https://www.facebook.com/p/The-Post-Bar-Grill-61563471441144/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer inline-flex items-center gap-2"
          >
            <FacebookIcon className="w-4 h-4" />
            Follow on Facebook
          </a>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors cursor-pointer"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            <XIcon className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg"
              style={{ filter: "sepia(15%) contrast(1.05)" }}
            />
            <div className="mt-3 text-center">
              <p className="font-playfair text-cream text-base">{lightbox.caption}</p>
              <p className="font-lato text-leather text-xs mt-1 tracking-widest uppercase">
                {lightbox.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
