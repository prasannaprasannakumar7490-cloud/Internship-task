import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import ProductCard from "./components/ProductCard";

const products = [
  {
    slug: "air-zoom-pegasus-41",
    name: "Air Zoom Pegasus 41",
    price: 129.99,
    sport: "Running",
    tag: "AI-Recommended for Daily Runs",
    image: "/placeholder-shoe.jpg"
  },
  {
    slug: "zoom-freak-5",
    name: "Zoom Freak 5",
    price: 139.99,
    sport: "Basketball",
    tag: "Explosive First-Step Support",
    image: "/placeholder-shoe.jpg"
  },
  {
    slug: "metcon-9",
    name: "Metcon 9",
    price: 149.99,
    sport: "Training",
    tag: "Optimized for HIIT & Lifting",
    image: "/placeholder-shoe.jpg"
  }
];

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6 space-y-12">
      <Hero />

      <section className="space-y-4">
        <SectionHeading label="Just For You" title="AI-Picked Essentials" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading label="Stories" title="Move With Purpose" />
        <div className="grid gap-6 md:grid-cols-3">
          <article className="glass rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Training</p>
              <h3 className="mt-3 text-lg font-semibold">
                Build Your Next Personal Best with AI-Guided Runs
              </h3>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Adaptive training suggestions based on pace, terrain, and recovery patterns.
            </p>
          </article>

          <article className="glass rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Basketball</p>
              <h3 className="mt-3 text-lg font-semibold">
                Court Culture: Style That Plays as Hard as You Do
              </h3>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Discover looks curated around your play style and favorite athletes.
            </p>
          </article>

          <article className="glass rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Sustainability</p>
              <h3 className="mt-3 text-lg font-semibold">
                Move to Zero: Smarter Materials, Smaller Footprint
              </h3>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Products rated by impact so you can shop the greener choice.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}