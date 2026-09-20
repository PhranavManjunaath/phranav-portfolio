import Image from "next/image";
import { metrics } from "@/lib/data";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section id="home" className="px-5 pb-4 pt-36 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <span
              data-reveal
              className="inline-block rounded-full border border-line bg-paper-alt px-4 py-1.5 text-xs font-medium text-ink/70"
            >
              Rajalakshmi Engineering College
            </span>

            <h1
              data-split="chars"
              className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-7xl"
            >
              Phranav Manjunath
            </h1>

            <p
              data-reveal
              className="mt-3 font-display text-xl text-ink/60 sm:text-2xl"
            >
              AI &amp; Data Science Undergraduate
            </p>

            <p
              data-reveal
              className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
            >
              Final-year B.Tech Artificial Intelligence &amp; Data Science
              student with a strong interest in Python programming and Data
              Structures &amp; Algorithms. Passionate about software
              development, problem solving, and continuous learning — seeking
              a Software Development or Python internship to apply my skills.
            </p>

            <div data-reveal className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                Explore Selected Work
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-alt"
              >
                View Resume
              </a>
            </div>
          </div>

          <div data-reveal className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-ink/10 via-line to-transparent blur-lg" />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-line bg-paper-alt shadow-lg shadow-ink/5">
                <Image
                  src="/profile.png"
                  alt="Phranav Manjunath"
                  fill
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 384px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-5 pt-12">
                  <div className="font-display text-lg font-medium text-white">
                    Phranav Manjunath
                  </div>
                  <div className="mt-0.5 text-xs text-white/70">
                    Rajalakshmi Engineering College
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal-group
          className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3"
        >
          {metrics.map((m) => (
            <div data-reveal-item key={m.label}>
              <div className="font-display text-3xl font-medium text-ink">
                {m.value}
              </div>
              <div className="mt-1 text-sm text-ink/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Marquee />
    </section>
  );
}
