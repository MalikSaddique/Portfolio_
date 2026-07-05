"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, RotateCcw, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const filters = ["All", "Go", "Full-Stack", "DevOps", "C++"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [flipped, setFlipped] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          subtitle="Production systems, real-time platforms, and DevOps infrastructure."
        />

        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
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
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all sm:px-5 sm:py-2 sm:text-sm",
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
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              centeredSlides={filteredProjects.length === 1}
              grabCursor
              pagination={{ clickable: true }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="projects-swiper pb-14"
              breakpoints={{
                640: {
                  slidesPerView: Math.min(filteredProjects.length, 2),
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: Math.min(filteredProjects.length, 3),
                  spaceBetween: 28,
                },
              }}
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div
                    className="h-[360px] w-full sm:h-[400px]"
                    style={{ perspective: "1000px" }}
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
                        className="glass-card absolute inset-0 flex flex-col p-5 sm:p-7"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-accent-blue/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-cyan sm:px-3 sm:py-1 sm:text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs text-accent-cyan sm:text-sm">
                          {project.role}
                        </p>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:mt-4">
                          {project.description}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4 sm:gap-4">
                          <button
                            onClick={() =>
                              setFlipped(
                                flipped === project.id ? null : project.id
                              )
                            }
                            className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan transition-colors hover:text-foreground"
                          >
                            <RotateCcw size={14} />
                            View Details
                          </button>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg bg-accent-blue/10 px-3 py-1.5 text-sm font-medium text-accent-cyan transition-colors hover:bg-accent-blue/20 hover:text-foreground"
                            >
                              <ExternalLink size={14} />
                              Visit
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Back */}
                      <div
                        className="glass-card absolute inset-0 flex flex-col p-5 sm:p-7"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:mt-4">
                          {project.detail}
                        </p>
                        <button
                          onClick={() => setFlipped(null)}
                          className="mt-3 text-sm font-medium text-accent-cyan hover:text-foreground sm:mt-4"
                        >
                          &larr; Back
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation arrows */}
            {filteredProjects.length > 1 && (
              <div className="mt-2 flex justify-center gap-4">
                <button
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-accent-cyan transition-all hover:border-accent-cyan hover:shadow-glow-cyan active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-accent-cyan transition-all hover:border-accent-cyan hover:shadow-glow-cyan active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
