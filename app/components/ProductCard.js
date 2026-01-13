import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group glass rounded-3xl p-4 flex flex-col gap-3 border border-white/5 hover:border-nike.volt/60 transition-colors"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-nike.deep/40 via-black to-nike.infra/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          {product.sport}
        </p>
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-xs text-nike.volt">{product.tag}</p>
      </div>
      <div className="flex items-center justify-between pt-1">
        <p className="text-sm font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200">
          Smart Fit Hint
        </span>
      </div>
    </Link>
  );
}