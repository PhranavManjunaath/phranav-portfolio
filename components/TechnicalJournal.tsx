import { ArrowUpRight } from "lucide-react";
import { journal } from "@/lib/data";

export default function TechnicalJournal() {
  return (
    <section id="journal" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2
          data-split="words"
          className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
        >
          Technical Journal
        </h2>
        <p data-reveal className="mt-2 text-ink/60">
          Write-ups from projects, kept short.
        </p>

        <div
          data-reveal-group
          className="mt-10 divide-y divide-line border-t border-line"
        >
          {journal.map((entry) => (
            <a
              data-reveal-item
              key={entry.title}
              href="#"
              className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-paper-alt"
            >
              <div>
                <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                  {entry.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-sm text-ink/50">
                  <span>{entry.tag}</span>
                  <span className="text-ink/20">•</span>
                  <span>{entry.readTime}</span>
                </div>
              </div>
              <ArrowUpRight
                className="shrink-0 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                size={22}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
