"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu as MenuIcon, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { nav, socials } from "@/lib/data";

const socialIcon = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-5 z-50 flex items-center justify-between px-5 sm:px-8">
        <a
          href="#contact"
          className="rounded-full border border-line bg-paper/80 px-4 py-2 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-paper sm:px-5"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <MenuIcon size={15} />
          Menu
        </button>

        <span className="hidden items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-xs font-medium text-ink/70 backdrop-blur-md sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to Internships &amp; Projects
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-paper"
          >
            <div className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
              <span className="font-display text-sm tracking-tight text-paper/60">
                Phranav Manjunath
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 transition-colors hover:bg-paper/10"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6 sm:px-10">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
                  className="group flex items-center justify-between border-b border-paper/10 py-4 font-display text-4xl font-medium text-paper/90 transition-colors hover:text-paper sm:text-6xl"
                >
                  {item.label}
                  <ArrowUpRight
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                    size={28}
                  />
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-wrap gap-4 px-6 py-8 sm:px-10">
              {socials.map((s, i) => {
                const Icon = socialIcon[s.label as keyof typeof socialIcon];
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + 0.06 * i, duration: 0.3 }}
                    className="flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-sm text-paper/80 transition-colors hover:border-paper/60 hover:text-paper"
                  >
                    <Icon size={15} />
                    {s.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
