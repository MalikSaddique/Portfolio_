"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ChevronDown,
} from "lucide-react";
import { personalInfo, navLinks, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 150;
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setProjectsOpen(false);
    setMoreOpen(false);
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-surface-glass shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 md:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="group flex items-center gap-2"
            onClick={() => handleNavClick("#home")}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent text-sm font-bold text-white shadow-glow"
            >
              {personalInfo.initials}
            </motion.div>
            <span className="hidden font-heading text-lg font-bold text-foreground sm:block">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        activeSection === "projects"
                          ? "text-accent-cyan"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </a>
                    <AnimatePresence>
                      {projectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-white/10 bg-surface-glass p-2 shadow-glow backdrop-blur-xl"
                        >
                          {projects.map((p) => (
                            <a
                              key={p.id}
                              href="#projects"
                              className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-accent-cyan"
                              onClick={() => handleNavClick("#projects")}
                            >
                              {p.title}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              if (link.hasMoreDropdown) {
                return (
                  <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setMoreOpen(true)}
                    onMouseLeave={() => setMoreOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        activeSection === "certifications"
                          ? "text-accent-cyan"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    <AnimatePresence>
                      {moreOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 top-full mt-1 w-52 rounded-xl border border-white/10 bg-surface-glass p-2 shadow-glow backdrop-blur-xl"
                        >
                          <a
                            href="#certifications"
                            className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-accent-cyan"
                            onClick={() => handleNavClick("#certifications")}
                          >
                            Certifications
                          </a>
                          <a
                            href="/resume/Muhammad_Siddique_Resume.pdf"
                            download
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-accent-cyan"
                          >
                            <Download size={14} />
                            Download Resume
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              const sectionId = link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      activeSection === sectionId
                        ? "text-accent-cyan"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {activeSection === sectionId && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-accent"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <a
              href="/resume/Muhammad_Siddique_Resume.pdf"
              download
              className="btn-primary hidden !px-4 !py-2 text-sm md:inline-flex"
            >
              <Download size={16} />
              Resume
            </a>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center px-6 pt-20 sm:px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => handleNavClick(link.href)}
                  className="border-b border-white/5 py-3 font-heading text-xl font-semibold text-foreground sm:py-4 sm:text-2xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/resume/Muhammad_Siddique_Resume.pdf"
                download
                custom={navLinks.length}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className="btn-primary mt-8 w-full text-center"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
