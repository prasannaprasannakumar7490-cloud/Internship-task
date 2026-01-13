export default function SectionHeading({ label, title }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          {label}
        </p>
        <h2 className="mt-1 text-xl sm:text-2xl font-semibold">
          {title}
        </h2>
      </div>
    </div>
  );
}