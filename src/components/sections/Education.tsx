"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="glass-card relative overflow-hidden p-8 md:p-10"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-blue/10 blur-2xl" />

          <div className="relative flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
            <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-accent text-white shadow-glow md:mb-0 md:mr-8">
              <GraduationCap size={32} />
            </div>

            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {education.degree}
              </h3>
              <p className="mt-2 text-lg text-accent-cyan">
                {education.institution}
              </p>
              <p className="mt-1 text-muted">{education.period}</p>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="mt-6 flex items-center gap-2 rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 px-5 py-3 md:mt-0"
            >
              <Award size={20} className="text-accent-cyan" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">
                  CGPA
                </p>
                <p className="font-heading text-2xl font-bold text-foreground">
                  {education.cgpa}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
