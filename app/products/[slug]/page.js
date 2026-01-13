import Image from "next/image";

const products = [
  {
    slug: "air-zoom-pegasus-41",
    name: "Air Zoom Pegasus 41",
    price: 129.99,
    sport: "Running",
    tag: "AI-Recommended for Daily Runs",
    image: "/placeholder-shoe.jpg",
    aiHighlight: "Balanced cushioning tuned for midfoot strikers and urban routes.",
    description:
      "A daily trainer built for consistency. Responsive foam and dual Zoom Air units help you stay in the groove from warm-up to cooldown.",
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    slug: "zoom-freak-5",
    name: "Zoom Freak 5",
    price: 139.99,
    sport: "Basketball",
    tag: "Explosive First-Step Support",
    image: "/placeholder-shoe.jpg",
    aiHighlight: "Optimized for lateral cuts and sudden stops on indoor courts.",
    description:
      "Built for power and agility, the Zoom Freak 5 supports your most explosive moves with locked-in containment.",
    sizes: ["8", "9", "10", "11", "12", "13"]
  },
  {
    slug: "metcon-9",
    name: "Metcon 9",
    price: 149.99,
    sport: "Training",
    tag: "Optimized for HIIT & Lifting",
    image: "/placeholder-shoe.jpg",
    aiHighlight: "Stable under load with responsive forefoot for mixed sessions.",
    description:
      "From heavy lifts to fast intervals, the Metcon 9 keeps your base stable and your transitions sharp.",
    sizes: ["6", "7", "8", "9", "10", "11"]
  }
];

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="px-4 sm:px-6 lg:px-12 py-10">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 max-w-5xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass border border-white/10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {product.sport}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {product.name}
          </h1>
          <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>

          <div className="glass rounded-2xl p-3 border border-nike.volt/50 text-sm">
            <p className="text-[10px] uppercase tracking-[0.25em] text-nike.volt">
              AI Fit Insight
            </p>
            <p className="mt-1 text-slate-100">{product.aiHighlight}</p>
          </div>

          <p className="text-sm text-slate-200">
            {product.description}
          </p>

          <div className="space-y-2 pt-2">
            <p className="text-xs text-slate-300 uppercase tracking-[0.25em]">
              Select size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-3 py-1.5 text-xs rounded-full border border-white/15 bg-white/5 hover:border-nike.volt/60 hover:bg-white/10"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-4 w-full sm:w-auto px-6 py-2.5 rounded-full bg-nike.volt text-black text-sm font-semibold hover:brightness-110 transition-transform hover:-translate-y-[1px]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}