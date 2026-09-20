import { Github, Linkedin, MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2
          data-split="words"
          className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-6xl"
        >
          Let&apos;s build something smart together.
        </h2>

        <div data-reveal-group className="mt-10 flex flex-wrap gap-3">
          <a
            data-reveal-item
            href="mailto:phranavmp@gmail.com"
            className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            <MessageSquare size={16} />
            Start a Conversation
          </a>
          <a
            data-reveal-item
            href="tel:+917395928349"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-alt"
          >
            <Phone size={16} />
            +91 73959 28349
          </a>
          <a
            data-reveal-item
            href="https://github.com/PhranavManjunaath"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-alt"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            data-reveal-item
            href="https://linkedin.com/in/phranav-manjunath-1857bb395"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-alt"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <p data-reveal className="mt-20 text-sm text-ink/40">
          © {new Date().getFullYear()} Phranav Manjunath. Built with Next.js
          &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
