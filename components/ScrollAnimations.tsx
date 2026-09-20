"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/* ── Text splitting for masked reveals ───────────────────── */
function isWhitespaceOnly(text: string) {
  return /^\s+$/.test(text);
}

function splitChars(el: HTMLElement): HTMLElement[] {
  const inners: HTMLElement[] = [];
  const nodes = [...el.childNodes];
  el.textContent = "";

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent!.split(/(\s+)/);
      words.forEach((word) => {
        if (!word) return;
        if (isWhitespaceOnly(word)) {
          el.appendChild(document.createTextNode(word));
          return;
        }
        const wordSpan = document.createElement("span");
        wordSpan.className = "split-word";
        [...word].forEach((char) => {
          const wrap = document.createElement("span");
          wrap.className = "split-char";
          const inner = document.createElement("span");
          inner.className = "split-char-inner";
          inner.textContent = char;
          wrap.appendChild(inner);
          wordSpan.appendChild(wrap);
          inners.push(inner);
        });
        el.appendChild(wordSpan);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      el.appendChild(node as Node);
    }
  });

  return inners;
}

function splitWords(el: HTMLElement): HTMLElement[] {
  const inners: HTMLElement[] = [];
  const nodes = [...el.childNodes];
  el.textContent = "";

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent!.split(/(\s+)/);
      words.forEach((word) => {
        if (!word) return;
        if (isWhitespaceOnly(word)) {
          el.appendChild(document.createTextNode(word));
          return;
        }
        const wrap = document.createElement("span");
        wrap.className = "split-line";
        const inner = document.createElement("span");
        inner.className = "split-inner";
        inner.textContent = word;
        wrap.appendChild(inner);
        el.appendChild(wrap);
        inners.push(inner);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      el.appendChild(node as Node);
    }
  });

  return inners;
}

/* ── Animation initializers ──────────────────────────────── */
function initSplitHeadlines() {
  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    const useChars = el.getAttribute("data-split") === "chars";
    const inners = useChars ? splitChars(el) : splitWords(el);
    gsap.fromTo(
      inners,
      { yPercent: 120, rotate: 3 },
      {
        yPercent: 0,
        rotate: 0,
        duration: 1.15,
        stagger: 0.045,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 84%" },
      }
    );
  });
}

function initReveals() {
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 44, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });
}

function initRevealGroups() {
  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal-item]", group);
    gsap.fromTo(
      items,
      { y: 44, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: group, start: "top 86%" },
      }
    );
  });
}

function initProgress() {
  const bar = document.getElementById("scroll-progress-fill");
  if (bar) {
    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
  }
}

function initHorizontal() {
  const section = document.querySelector<HTMLElement>("[data-horizontal]");
  const track = document.querySelector<HTMLElement>("[data-horizontal-track]");
  if (!section || !track) return;

  const distance = () => Math.max(track.scrollWidth - window.innerWidth, 0);
  const cards = gsap.utils.toArray<HTMLElement>("[data-h-item]", track);

  if (distance() === 0) {
    gsap.set(cards, { autoAlpha: 1, y: 0 });
    return;
  }

  const tween = gsap.to(track, {
    x: () => -distance(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + distance(),
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onEnter: () => section.classList.add("is-pinned"),
      onLeaveBack: () => section.classList.remove("is-pinned"),
    },
  });

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { y: 60, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          containerAnimation: tween,
          start: "left 92%",
        },
      }
    );
  });
}

/* ── Component ───────────────────────────────────────────── */
function revealAll() {
  ScrollTrigger.getAll().forEach((t) => t.kill(true));
  document.querySelectorAll("[data-reveal], [data-reveal-item]").forEach((el) => {
    gsap.set(el, { clearProps: "all" });
  });
  document.querySelectorAll("[data-horizontal]").forEach((el) => {
    el.classList.remove("is-pinned");
  });
}

export default function ScrollAnimations() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let lenis: Lenis | null = null;
    const raf = (time: number) => lenis?.raf(time * 1000);

    try {
      if (!reducedMotion) {
        lenis = new Lenis({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.6,
        });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        initSplitHeadlines();
        initReveals();
        initRevealGroups();
        initHorizontal();
        initProgress();
      }
    } catch (err) {
      revealAll();
      console.error("ScrollAnimations init failed:", err);
    }

    const onClick = (e: MouseEvent) => {
      if (reducedMotion) return;
      const link = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const target = link.getAttribute("href");
      if (!target || target === "#") return;
      e.preventDefault();
      lenis?.scrollTo(target, { offset: 0, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    ScrollTrigger.refresh();

    const guard = window.setInterval(() => {
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal], [data-reveal-item], [data-h-item]"
        )
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top > window.innerHeight || r.bottom < 0) return;
          if (parseFloat(getComputedStyle(el).opacity) >= 0.2) return;
          gsap.to(el, {
            autoAlpha: 1,
            duration: 0.4,
            overwrite: true,
            onComplete: () => gsap.set(el, { clearProps: "transform" }),
          });
        });
    }, 700);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const onFonts = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(onFonts).catch(() => {});
    const settleTimer = window.setTimeout(onLoad, 1500);

    return () => {
      window.clearInterval(guard);
      window.clearTimeout(settleTimer);
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", onLoad);
      if (!reducedMotion) gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(0);
      lenis?.destroy();
      lenis = null;
      revealAll();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]"
    >
      <div
        id="scroll-progress-fill"
        className="h-full w-full origin-left scale-x-0 bg-ink"
      />
    </div>
  );
}