interface CatalogPageBannerProps {
  data: {
    subtitle: string;
    title: string;
  };
}

export function CatalogPageBanner({ data }: CatalogPageBannerProps) {
  return (
    <section className="py-12 bg-white text-center border-b border-neutral-100 mt-24">
      <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-brand-accent mb-2">
        {data.subtitle}
      </h2>
      <h3 className="text-4xl md:text-5xl font-light tracking-tight font-serif italic text-brand">
        {data.title}
      </h3>
    </section>
  );
}
