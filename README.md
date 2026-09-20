# Phranav Manjunath — Portfolio

Next.js (App Router) + Tailwind CSS + Framer Motion + Lucide Icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — assembles all sections
- `app/layout.tsx` — fonts (Space Grotesk display / Plus Jakarta Sans body) + metadata
- `components/Header.tsx` — floating nav pills + full-screen animated menu modal
- `components/Hero.tsx` — name, role, bio, CTAs, metrics
- `components/Marquee.tsx` — infinite auto-scrolling tech ticker
- `components/SelectedWork.tsx` — horizontal-scroll project carousel
- `components/ArchitectureSection.tsx` — asymmetrical about/approach grid
- `components/TechnicalJournal.tsx` — write-up list
- `components/Footer.tsx` — closing CTA + contact links
- `lib/data.ts` — all copy/content in one place — edit here first

## Notes

- Add a real `resume.pdf` to `/public` for the "View Resume" button.
- Swap the `mailto:`, GitHub and LinkedIn placeholder URLs in `lib/data.ts` and `Footer.tsx`.
- Colors, fonts and radii are defined in `tailwind.config.ts` if you want to retheme.
