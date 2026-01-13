export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Nike Pulse – Concept AI Redesign.</p>
        <div className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
}