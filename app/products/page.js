import ProductCard from "../components/ProductCard";

const products = [
  {
    slug: "air-zoom-pegasus-41",
    name: "Air Zoom Pegasus 41",
    price: 129.99,
    sport: "Running",
    tag: "AI-Recommended for Daily Runs",
    image: "/placeholder-shoe.jpg",
    aiHighlight: "Balanced cushioning tuned for midfoot strikers and urban routes."
  },
  {
    slug: "zoom-freak-5",
    name: "Zoom Freak 5",
    price: 139.99,
    sport: "Basketball",
    tag: "Explosive First-Step Support",
    image: "/placeholder-shoe.jpg",
    aiHighlight: "Optimized for lateral cuts and sudden stops on indoor courts."
  },
  {
    slug: "metcon-9",
    name: "Metcon 9",
    price: 149.99,
    sport: "Training",
    tag: "Optimized for HIIT & Lifting",
    image: "/placeholder-shoe.jpg",
    aiHighlight: "Stable under load with responsive forefoot for mixed sessions."
  }
];

export default function ProductsPage({ searchParams }) {
  const { sport } = searchParams || {};
  const filtered = sport
    ? products.filter((p) => p.sport.toLowerCase() === sport.toLowerCase())
    : products;

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Catalog
          </p>
          <h1 className="text-2xl font-semibold">
            {sport ? `${sport} essentials` : "All picks"}
          </h1>
        </div>
        <p className="text-xs text-slate-400">
          Smart suggestions combine motion type, surface, and intensity—no personal identity data.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}