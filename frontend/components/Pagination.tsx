export function Pagination() {
  return (
    <div className="mt-20 flex justify-center space-x-4 border-t border-neutral-100 pt-10">
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-400 hover:border-brand-accent hover:text-brand-accent transition-all">
        <span className="material-symbols-outlined !text-sm">arrow_back_ios_new</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white text-xs font-bold">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-400 hover:border-brand-accent hover:text-brand-accent transition-all text-xs font-bold">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-400 hover:border-brand-accent hover:text-brand-accent transition-all">
        <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
      </button>
    </div>
  );
}
