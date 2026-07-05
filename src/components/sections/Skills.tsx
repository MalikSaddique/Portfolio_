"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Server,
  TestTube2,
  GitBranch,
  Wrench,
  ClipboardList,
} from "lucide-react";
import { skills, marqueeTech } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  layout: Layout,
  database: Database,
  server: Server,
  test: TestTube2,
  git: GitBranch,
  tools: Wrench,
  project: ClipboardList,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Expertise"
          subtitle="Technologies and tools I use to build scalable, production-ready systems."
        />

        {/* Marquee */}
        <div className="mb-12 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mx-6 inline-flex items-center gap-2 text-sm font-medium text-muted/60"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass-card group p-6 transition-shadow hover:shadow-glow"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-cyan transition-colors group-hover:bg-accent-blue/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {group.category}
                  </h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Proficiency bar */}
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-accent"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
