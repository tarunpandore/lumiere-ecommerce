export function Newsletter() {
  return (
    <section className="py-32 bg-brand text-white px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-normal mb-8">Join the Circle</h2>
        <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-16">Be the first to experience seasonal launches.</p>
        <form className="flex flex-col sm:flex-row gap-0 border-b border-white/20 pb-4">
          <input 
            className="bg-transparent border-none text-white text-lg font-serif placeholder:text-white/20 focus:ring-0 px-0 flex-grow" 
            placeholder="Enter your email address" 
            type="email" 
          />
          <button 
            className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-white/60 transition-colors pt-4 sm:pt-0" 
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
