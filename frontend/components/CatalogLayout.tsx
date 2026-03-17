import { FilterSidebar } from "./FilterSidebar";
import { CatalogProductCard } from "./CatalogProductCard";
import { Pagination } from "./Pagination";

interface CatalogLayoutProps {
  data: {
    filters: any;
    sortOptions: string[];
    products: any[];
  }
}

export function CatalogLayout({ data }: CatalogLayoutProps) {
  return (
    <main className="max-w-[90rem] mx-auto px-4 md:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <FilterSidebar data={data.filters} />
        
        <section className="flex-1">
          {/* Results Counter and Sort */}
          <div className="flex justify-between items-end mb-8 border-b border-neutral-100 pb-4">
            <span className="text-xs text-neutral-400 italic">Showing {data.products.length} fragrances</span>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">Sort:</span>
              <select className="border-none bg-transparent text-sm focus:ring-0 cursor-pointer font-medium p-0 pr-6">
                {data.sortOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {data.products.map((product) => (
              <CatalogProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination />
        </section>
      </div>
    </main>
  );
}
