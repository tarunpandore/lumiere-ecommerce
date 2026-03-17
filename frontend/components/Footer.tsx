import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white py-24 px-8 md:px-20 border-t border-neutral-100">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl mb-8">Lumière</h2>
          <p className="text-neutral-400 text-xs leading-relaxed max-w-xs uppercase tracking-widest font-light">
            The art of light, captured in fragrance. Ethically sourced, masterfully crafted in France.
          </p>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8">Discover</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              <li>
                <Link className="hover:text-brand transition-colors" href="#">
                  Collections
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand transition-colors" href="#">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand transition-colors" href="#">
                  The Studio
                </Link>
              </li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8">Support</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              <li>
                <Link className="hover:text-brand transition-colors" href="#">
                  Shipping
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand transition-colors" href="#">
                  Returns
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand transition-colors" href="#">
                  Contact
                </Link>
              </li>
          </ul>
        </div>
        
        <div className="md:col-span-4 flex flex-col md:items-end">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8">Social</h4>
          <div className="flex space-x-8">
              <Link className="text-neutral-900 hover:opacity-50 transition-opacity" href="#">
                <span className="text-[10px] uppercase tracking-[0.3em]">Instagram</span>
              </Link>
              <Link className="text-neutral-900 hover:opacity-50 transition-opacity" href="#">
                <span className="text-[10px] uppercase tracking-[0.3em]">Pinterest</span>
              </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-[9px] text-neutral-300 uppercase tracking-[0.3em]">
        <p>© 2024 Lumière Parfums. Worldwide.</p>
        <div className="flex space-x-12 mt-8 md:mt-0">
            <Link className="hover:text-neutral-900 transition-colors" href="#">
              Privacy
            </Link>
            <Link className="hover:text-neutral-900 transition-colors" href="#">
              Terms
            </Link>
            <Link className="hover:text-neutral-900 transition-colors" href="#">
              Accessibility
            </Link>
        </div>
      </div>
    </footer>
  );
}
