"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const filters = ["All", "Go", "Full-Stack", "DevOps", "C++"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [flipped, setFlipped] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          subtitle="Production systems, real-time platforms, and DevOps infrastructure."
        />

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter(filter);
                setFlipped(null);
              }}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-gradient-accent text-white shadow-glow"
                  : "border border-white/10 text-muted hover:border-accent-cyan/50 hover:text-accent-cyan"
              )}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Swiper
              modules={[Navigation, Pagination, EffectCards]}
              effect="cards"
              grabCursor
              pagination={{ clickable: true }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="projects-swiper mx-auto max-w-lg pb-12"
              breakpoints={{
                768: {
                  effect: "slide",
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <motion.div
                    className="perspective-1000 h-[420px] w-full"
                    style={{ perspective: "1000px" }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / rect.width - 0.5;
                      const y = (e.clientY - rect.top) / rect.height - 0.5;
                      e.currentTarget.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "rotateY(0deg) rotateX(0deg)";
                    }}
                  >
                    <div
                      className={cn(
                        "relative h-full w-full transition-transform duration-500",
                        flipped === project.id && "[transform:rotateY(180deg)]"
                      )}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front */}
                      <div
                        className="glass-card absolute inset-0 flex flex-col p-8 backface-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-cyan"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-accent-cyan">
                          {project.role}
                        </p>
                        <p className="mt-4 flex-1 text-muted">
                          {project.description}
                        </p>
                        <button
                          onClick={() =>
                            setFlipped(
                              flipped === project.id ? null : project.id
                            )
                          }
                          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan transition-colors hover:text-foreground"
                        >
                          <RotateCcw size={14} />
                          View Details
                        </button>
                      </div>

                      {/* Back */}
                      <div
                        className="glass-card absolute inset-0 flex flex-col p-8"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                          {project.detail}
                        </p>
                        <button
                          onClick={() => setFlipped(null)}
                          className="mt-4 text-sm font-medium text-accent-cyan hover:text-foreground"
                        >
                          ← Back
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation */}
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-accent-cyan transition-colors hover:border-accent-cyan hover:shadow-glow-cyan"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-accent-cyan transition-colors hover:border-accent-cyan hover:shadow-glow-cyan"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
