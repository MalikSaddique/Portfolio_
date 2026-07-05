"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Network, Trophy, Medal } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  network: Network,
  cert: Award,
  trophy: Trophy,
  award: Medal,
};

export default function Certifications() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & Competitions"
          subtitle="Professional certifications and competitive achievements."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            const isHovered = hovered === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHovered(cert.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "glass-card group relative cursor-pointer overflow-hidden p-6 transition-all duration-500",
                  isHovered && "shadow-glow-lg border-accent-cyan/30"
                )}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet transition-colors group-hover:bg-accent-violet/20">
                  <Icon size={24} />
                </div>

                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-accent-cyan">{cert.issuer}</p>
                <p className="mt-1 text-xs text-muted">{cert.date}</p>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    height: isHovered ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-muted">
                    {cert.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
