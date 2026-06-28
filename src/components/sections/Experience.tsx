"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Network } from "lucide-react";
import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  backend: Briefcase,
  network: Network,
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !lineRef.current || !timelineRef.current)
      return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.5,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Journey"
          subtitle="Roles where I've built APIs, deployed services, and solved real-world problems."
        />

        <div ref={timelineRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 origin-top bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-accent"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="space-y-12">
            {experience.map((item, i) => {
              const Icon = iconMap[item.icon] || Briefcase;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent-cyan bg-background md:left-1/2">
                    <Icon size={14} className="text-accent-cyan" />
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden w-1/2 md:block" />

                  <div
                    className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 md:p-8"
                    >
                      <span className="text-sm font-medium text-accent-cyan">
                        {item.period}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-muted">{item.company}</p>

                      <ul className="mt-4 space-y-3">
                        {item.highlights.map((highlight, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.08 }}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
