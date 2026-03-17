import Image from 'next/image';

interface CatalogProductCardProps {
  product: {
    id: string;
    name: string;
    notes: string;
    price: number;
    imageSrc: string;
    imageAlt: string;
  };
}

export function CatalogProductCard({ product }: CatalogProductCardProps) {
  return (
    <article className="product-card group cursor-pointer" data-purpose="product-card">
      <div className="product-image-container relative bg-neutral-50 aspect-[3/4] flex items-center justify-center p-8 mb-4 overflow-hidden">
        <Image 
          alt={product.imageAlt} 
          className="object-contain w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110" 
          src={product.imageSrc} 
           fill
           sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="quick-add absolute bottom-6 left-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-brand text-white text-[10px] uppercase font-bold tracking-[0.2em] py-4 rounded-sm hover:bg-brand-accent transition-colors">
            Quick Purchase
          </button>
        </div>
      </div>
      <div className="text-center mt-6">
        <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-neutral-400 mb-1">{product.notes}</h3>
        <h4 className="text-lg font-light mb-2 font-serif">{product.name}</h4>
        <p className="text-brand-accent font-bold text-sm">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}
