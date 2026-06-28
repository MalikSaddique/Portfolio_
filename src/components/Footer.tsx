"use client";

import { Github, Linkedin, Mail, Container } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = navLinks.filter(
    (l) => !l.hasDropdown && !l.hasMoreDropdown
  );

  return (
    <footer className="relative border-t border-white/10 bg-surface/50 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent text-sm font-bold text-white">
                {personalInfo.initials}
              </div>
              <span className="font-heading text-lg font-bold text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted">{personalInfo.title}</p>
            <div
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted"
              title="This site is containerized with Docker & Kubernetes-ready manifests"
            >
              <Container size={14} className="text-accent-cyan" />
              This site is containerized 🐳
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold text-white">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">{personalInfo.email}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-muted">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
