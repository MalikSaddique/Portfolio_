"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

const PROFILE_IMAGE = "/Profile-picture/Profile-image.jpg";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.typewriterRoles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex(
              (prev) => (prev + 1) % personalInfo.typewriterRoles.length,
            );
          }
        }
      },
      isDeleting ? 50 : 80,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 md:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <ParticleNetwork className="absolute inset-0 h-full w-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Gradient blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-blue/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-accent-violet/20 blur-[100px]"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        {/* Profile image — top on mobile, right aside on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="order-first flex justify-center lg:order-last"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-accent opacity-60 blur-md" />
            <div className="absolute -inset-px rounded-full bg-gradient-accent" />

            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-background shadow-glow-lg sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
              <Image
                src={PROFILE_IMAGE}
                alt={`${personalInfo.name} — Software Engineer`}
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
                className="scale-110 object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>

            {/* Decorative orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-accent-cyan/20 sm:-inset-6"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>

        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section-eyebrow mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 h-8 font-heading text-lg text-accent-cyan sm:mt-6 sm:text-xl md:text-2xl"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-4 max-w-2xl text-base text-muted sm:mt-6 sm:text-lg md:text-xl lg:mx-0"
          >
            {personalInfo.heroTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5 lg:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan hover:shadow-glow-cyan"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
