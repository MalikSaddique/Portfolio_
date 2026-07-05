"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading eyebrow="About Me" title="Building Reliable Systems" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              {personalInfo.objective}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Go", "React", "Kubernetes", "Docker", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-sm font-medium text-accent-cyan"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-6 text-center"
              >
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  text={stat.text}
                />
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
