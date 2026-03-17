import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    notes: string;
    price: number;
    imageSrc: string;
    imageAlt: string;
    aspectRatio: string;
    masonry: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div 
      className={`group cursor-pointer ${product.masonry ? 'masonry-item' : ''}`} 
      data-purpose="product-card"
    >
      <div className={`${product.aspectRatio} overflow-hidden bg-neutral-50 mb-8 relative`}>
        <Image 
          alt={product.imageAlt} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          src={product.imageSrc} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-3xl mb-2 font-normal">{product.name}</h3>
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.3em]">{product.notes}</p>
        </div>
        <p className="font-sans font-light text-lg">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
