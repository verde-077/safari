import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import film from "@/assets/safari-hills-film.mp4";
import desktopFilm from "@/assets/hero-desktop.mp4";
import mobileFilm from "@/assets/hero-mobile.mp4";
import posterImage from "@/assets/safari-hills-still.jpg";
import resortPoolImg from "@/assets/resort-pool-landscape.jpg";
import stayHillsideImg from "@/assets/stay-hillside.jpg";
import stayVillasImg from "@/assets/stay-villas.jpg";
import stayForestImg from "@/assets/stay-forest.jpg";
import expMainImg from "@/assets/exp-main.jpg";
import expTrailsImg from "@/assets/exp-trails.jpg";
import expDiningImg from "@/assets/exp-dining.jpg";
import expWellnessImg from "@/assets/exp-wellness.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safari Hills — A quieter kind of escape" },
      {
        name: "description",
        content:
          "Discover Safari Hills through a slower, more considered kind of stay, surrounded by green and stillness.",
      },
      { property: "og:title", content: "Safari Hills — A quieter kind of escape" },
      {
        property: "og:description",
        content: "A slower, more considered stay, surrounded by green and stillness.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SafariHillsPage,
});

const navigation = [
  { label: "The feeling", href: "#feeling" },
  { label: "The stay", href: "#stay" },
  { label: "Find your way", href: "#discover" },
];

function SafariHillsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [preloadMode, setPreloadMode] = useState<"metadata" | "auto">("metadata");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setPreloadMode(mediaQuery.matches ? "auto" : "metadata");
    const handler = (e: MediaQueryListEvent) => {
      setPreloadMode(e.matches ? "auto" : "metadata");
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden">
      <section className="safari-hero relative isolate flex min-h-[780px] h-[94svh] max-h-[1120px] flex-col justify-between" aria-label="Safari Hills">
        <video
          aria-hidden="true"
          className="safari-hero__video absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload={preloadMode}
          poster={posterImage}
        >
          <source src={desktopFilm} type="video/mp4" media="(min-width: 768px)" />
          <source src={mobileFilm} type="video/mp4" />
        </video>
        <div className="safari-hero__shade absolute inset-0 -z-10" />

        <header className="safari-header relative z-20 mx-auto grid w-full max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-6 md:px-12 md:py-8">
          <a className="safari-wordmark" href="#top" aria-label="Safari Hills home">
            <span className="safari-wordmark__mark" aria-hidden="true">S</span>
            <span className="safari-wordmark__text">SAFARI HILLS</span>
          </a>
          <nav className="hidden items-center gap-11 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <a className="safari-nav-link" href={item.href} key={item.label}>{item.label}</a>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-6">
            <a className="safari-enquire hidden sm:inline-flex" href="#discover">
              Begin an enquiry <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.5} />
            </a>
            <Button
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="safari-menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              size="icon"
              variant="ghost"
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </header>

        <div id="top" className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pb-8 md:px-12 md:pb-12">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow safari-hero__eyebrow mb-6">A considered retreat in nature</p>
            <h1 className="display-serif safari-title">
              Come back<br /><em>to quiet.</em>
            </h1>
          </div>
          <div className="mt-11 flex items-end justify-between gap-6">
            <p className="safari-location eyebrow">A place to pause, and be present</p>
            <a className="safari-scroll" href="#feeling">
              <span className="eyebrow hidden sm:block">Scroll to discover</span>
              <ArrowDown aria-hidden="true" size={17} strokeWidth={1.4} />
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="safari-menu-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <nav className="safari-menu-links" aria-label="Full navigation">
              {navigation.map((item, index) => (
                <a href={item.href} key={item.label} onClick={closeMenu}>
                  <span className="eyebrow">0{index + 1}</span>
                  <span className="display-serif">{item.label}</span>
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.4} />
                </a>
              ))}
              <a href="#discover" onClick={closeMenu}>
                <span className="eyebrow">04</span>
                <span className="display-serif">Make an enquiry</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.4} />
              </a>
            </nav>
            <p className="eyebrow safari-menu-caption">SAFARI HILLS · A PLACE TO PAUSE</p>
          </div>
        )}
      </section>

      {/* SECTION 2 — THE RESORT */}
      <section id="resort" className="bg-[#fcfcfb] text-neutral-900 px-6 py-20 md:px-12 md:py-28 lg:py-36">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col max-md:items-center max-md:text-center md:grid md:grid-cols-12 md:gap-16 md:items-center">
            {/* Left Content */}
            <div className="max-md:flex max-md:flex-col max-md:items-center md:col-span-5 text-left" data-reveal>
              <div className="flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium text-neutral-500 mb-5">
                <span>THE RESORT</span>
                <span className="h-[1px] w-8 bg-neutral-300"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-[1.12] mb-6">
                Nature,<br />without the noise.
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-md font-normal">
                Safari Hills is a quiet hillside retreat surrounded by forests, open skies and the landscape beyond.
              </p>
              <a
                href="#stays"
                className="inline-flex items-center gap-3 bg-[#1e241e] text-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-colors"
              >
                Discover the resort <ArrowRight size={14} />
              </a>
            </div>

            {/* Right Image */}
            <div className="w-full max-md:mt-10 md:col-span-7" data-reveal>
              <img
                src={resortPoolImg}
                alt="Safari Hills infinity pool looking over pine forest valley"
                className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover rounded-md shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR SPACES / STAYS */}
      <section id="stays" className="bg-[#fcfcfb] text-neutral-900 px-6 py-20 md:px-12 md:py-28 lg:py-36 border-t border-neutral-200/60">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Section Header */}
          <div className="flex flex-col max-md:items-center max-md:text-center md:flex-row md:items-end md:justify-between mb-12 md:mb-16" data-reveal>
            <div className="max-md:flex max-md:flex-col max-md:items-center text-left">
              <div className="flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium text-neutral-500 mb-4">
                <span>OUR SPACES</span>
                <span className="h-[1px] w-8 bg-neutral-300"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-[1.12] mb-3">
                Stays for<br />meaningful moments.
              </h2>
              <p className="text-neutral-600 text-sm md:text-base max-w-lg font-normal">
                Thoughtfully designed spaces that blend modern comfort with the beauty of nature.
              </p>
            </div>
            <a
              href="#discover"
              className="max-md:mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              View all stays <ArrowRight size={14} />
            </a>
          </div>

          {/* Accommodation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-md cursor-pointer" data-reveal>
              <img
                src={stayHillsideImg}
                alt="Hillside Rooms interior suite"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-6">
                <span className="text-white font-medium text-lg md:text-xl tracking-tight">Hillside Rooms</span>
                <ArrowRight className="text-white w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-md cursor-pointer" data-reveal>
              <img
                src={stayVillasImg}
                alt="Private Villas exterior pool deck"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-6">
                <span className="text-white font-medium text-lg md:text-xl tracking-tight">Private Villas</span>
                <ArrowRight className="text-white w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-md cursor-pointer" data-reveal>
              <img
                src={stayForestImg}
                alt="Forest Suites balcony view"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-6">
                <span className="text-white font-medium text-lg md:text-xl tracking-tight">Forest Suites</span>
                <ArrowRight className="text-white w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — EXPERIENCES */}
      <section id="experiences" className="bg-[#fcfcfb] text-neutral-900 px-6 py-20 md:px-12 md:py-28 lg:py-36 border-t border-neutral-200/60">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col-reverse md:grid md:grid-cols-12 md:gap-16 md:items-start">
            {/* Left Imagery Column */}
            <div className="w-full max-md:mt-10 md:col-span-7 flex flex-col gap-6" data-reveal>
              {/* Main Wide Landscape Image */}
              <img
                src={expMainImg}
                alt="Safari Hills mist-covered mountain forest landscape"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover rounded-md shadow-sm"
                loading="lazy"
              />
              {/* 3 Sub-experience cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <div>
                  <img
                    src={expTrailsImg}
                    alt="Nature Trails"
                    className="w-full h-[120px] sm:h-[150px] md:h-[170px] object-cover rounded-md shadow-sm"
                    loading="lazy"
                  />
                  <p className="mt-2.5 text-[0.7rem] sm:text-xs uppercase tracking-wider font-medium text-neutral-800">Nature Trails</p>
                </div>
                <div>
                  <img
                    src={expDiningImg}
                    alt="Dining"
                    className="w-full h-[120px] sm:h-[150px] md:h-[170px] object-cover rounded-md shadow-sm"
                    loading="lazy"
                  />
                  <p className="mt-2.5 text-[0.7rem] sm:text-xs uppercase tracking-wider font-medium text-neutral-800">Dining</p>
                </div>
                <div>
                  <img
                    src={expWellnessImg}
                    alt="Wellness"
                    className="w-full h-[120px] sm:h-[150px] md:h-[170px] object-cover rounded-md shadow-sm"
                    loading="lazy"
                  />
                  <p className="mt-2.5 text-[0.7rem] sm:text-xs uppercase tracking-wider font-medium text-neutral-800">Wellness</p>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="max-md:flex max-md:flex-col max-md:items-center max-md:text-center md:col-span-5 flex flex-col justify-center pt-2 md:pt-10 text-left" data-reveal>
              <div className="flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium text-neutral-500 mb-5">
                <span>EXPERIENCES</span>
                <span className="h-[1px] w-8 bg-neutral-300"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-[1.12] mb-6">
                More than<br />a stay
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-md font-normal">
                From nature trails to local flavours, discover experiences that let you slow down and connect with what matters.
              </p>
              <a
                href="#discover"
                className="inline-flex items-center gap-3 bg-[#1e241e] text-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-colors"
              >
                Explore experiences <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#181d18] text-neutral-200 px-6 py-12 md:px-12 md:py-16 border-t border-neutral-800">
        <div className="mx-auto w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-6">
          <a className="safari-wordmark text-white" href="#top">
            <span className="safari-wordmark__mark" aria-hidden="true">S</span>
            <span className="safari-wordmark__text">SAFARI HILLS</span>
          </a>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">A considered retreat in nature</p>
          <a className="text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-white transition-colors" href="#top">
            Return to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}