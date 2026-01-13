import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl glass border border-white/10 p-6 sm:p-10 flex flex-col lg:flex-row gap-8">
      <div className="relative z-10 max-w-xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
          Introducing
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Nike Pulse
          <span className="block text-nike.volt mt-1">
            Your movement, amplified by AI.
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-200 max-w-md">
          Discover products, stories, and outfits tuned to your sport, surface, and session—
          from daily runs to midnight courts.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/products"
            className="px-5 py-2.5 text-sm rounded-full bg-nike.volt text-black font-medium hover:brightness-105 transition-transform hover:-translate-y-[1px]"
          >
            Shop AI Picks
          </Link>
          <Link
            href="/products?sport=Running"
            className="px-5 py-2.5 text-sm rounded-full border border-white/20 text-slate-100 hover:bg-white/5 transition-colors"
          >
            Explore Running
          </Link>
        </div>
        <p className="text-xs text-slate-400 pt-1">
          Smart suggestions are based on fit, feel, and usage data—not personal identity.
        </p>
      </div>

      <div className="relative flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-radial from-nike.volt/30 via-transparent to-transparent opacity-60 blur-3xl" />
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
          <Image
            src="/hero-running.jpg"
            alt="Runner in motion with neon trail"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-3 right-3 glass rounded-2xl px-3 py-2 text-[10px] text-slate-200 border border-white/10">
          <p className="uppercase tracking-[0.25em] text-[9px] text-slate-400">
            AI Highlight
          </p>
          <p className="mt-1">
            Pace, distance, and terrain-aware recommendations to keep you in your sweet spot.
          </p>
        </div>
      </div>
    </section>
  );
}