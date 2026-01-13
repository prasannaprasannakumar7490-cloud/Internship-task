import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-nike.volt flex items-center justify-center text-black font-extrabold text-xs">
            NP
          </div>
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-slate-200">
            Nike Pulse
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-slate-200">
          <Link href="/products?sport=Running" className="hover:text-nike.volt transition-colors">
            Running
          </Link>
          <Link href="/products?sport=Basketball" className="hover:text-nike.volt transition-colors">
            Basketball
          </Link>
          <Link href="/products?sport=Training" className="hover:text-nike.volt transition-colors">
            Training
          </Link>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full glass border border-white/10">
          <span className="sr-only">Open navigation</span>
          <div className="w-4 h-4 flex flex-col justify-between">
            <span className="block h-[2px] bg-white rounded-full"></span>
            <span className="block h-[2px] bg-white rounded-full"></span>
          </div>
        </button>
      </div>
    </header>
  );
}