import { techTicker } from "@/lib/data";

export default function Marquee() {
  const items = [...techTicker, ...techTicker];

  return (
    <div className="relative mt-16 overflow-hidden border-y border-line py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-sm font-medium text-ink/50"
          >
            {item}
            <span className="text-ink/20">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
