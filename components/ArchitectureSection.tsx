import { Database, GitBranch, Cpu } from "lucide-react";

const milestones = [
  { icon: Cpu, label: "Python Development", note: "Python, C, Java & JavaScript" },
  { icon: Database, label: "AI & Data Science", note: "NumPy, Pandas & Machine Learning" },
  { icon: GitBranch, label: "Leadership", note: "President — Road Aura Road Safety Club" },
];

export default function ArchitectureSection() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2
            data-split="words"
            className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
          >
            About Me
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            <p data-reveal>
              I&apos;m a final-year B.Tech Artificial Intelligence &amp; Data
              Science undergraduate at Rajalakshmi Engineering College
              (2023–2027) with a strong interest in Python programming and
              Data Structures &amp; Algorithms. My work so far has been
              about building practical tools that actually solve everyday
              problems.
            </p>
            <p data-reveal>
              I&apos;ve built an athlete-centric calorie and physique tracker to
              manage workouts and macros, an internship tracker to keep
              applications and deadlines organized, and I&apos;m currently
              developing an AI-based exam hall cheating detection system
              using computer vision and machine learning. Each project is a
              chance to strengthen my fundamentals in OOP, DBMS, and
              real-world software development.
            </p>
            <p data-reveal>
              Outside the code, I lead the Road Aura road safety club on
              campus — organizing awareness initiatives and student events.
              I&apos;m a quick learner, open to feedback, and now looking for a
              Software Development or Python internship to apply what I&apos;ve
              learned and grow on real-world projects.
            </p>
          </div>
        </div>

        <div data-reveal-group className="grid gap-4">
          {milestones.map((m) => (
            <div
              data-reveal-item
              key={m.label}
              className="flex items-start gap-4 rounded-2xl border border-line bg-paper-alt p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                <m.icon size={18} />
              </div>
              <div>
                <div className="font-display text-lg font-medium text-ink">
                  {m.label}
                </div>
                <p className="mt-1 text-sm text-ink/60">{m.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
