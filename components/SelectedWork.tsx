import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  return (
    <section id="work" data-horizontal className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2
            data-split="words"
            className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
          >
            Selected Work
          </h2>
          <p data-reveal className="text-ink/60">
            Systems built around real constraints.
          </p>
        </div>
      </div>

      <div
        data-horizontal-track
        className="mt-12 flex w-max gap-5 px-5 pb-10 sm:px-8"
      >
        {projects.map((p) => (
          <article
            key={p.id}
            data-h-item
            className="group flex w-[85vw] shrink-0 flex-col justify-between rounded-2xl border border-line bg-paper-alt p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5 sm:w-[420px]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-ink/40">
                <span>{p.id}</span>
                <span>{p.domain}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {p.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {s}
                </span>
              ))}
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper transition-colors hover:bg-ink/80"
                >
                  GitHub
                  <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}