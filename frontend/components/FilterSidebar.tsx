interface FilterSidebarProps {
  data: {
    scentFamilies: { id: string; label: string; checked: boolean }[];
    intensities: { id: string; label: string; checked: boolean }[];
    volumes: { id: string; label: string; selected: boolean }[];
  };
}

export function FilterSidebar({ data }: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-32 space-y-10">
        
        {/* Scent Families */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-neutral-400">Scent Families</h4>
          <div className="space-y-3">
            {data.scentFamilies.map((item) => (
              <label key={item.id} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  defaultChecked={item.checked}
                  className="form-checkbox h-4 w-4 text-brand-accent border-neutral-300 rounded-sm focus:ring-brand-accent" 
                />
                <span className="ml-3 text-sm font-light group-hover:text-brand-accent transition-colors">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Intensity */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-neutral-400">Intensity</h4>
           <div className="space-y-3">
            {data.intensities.map((item) => (
              <label key={item.id} className="flex items-center group cursor-pointer">
                <input 
                  type="radio" 
                  name="intensity"
                  defaultChecked={item.checked}
                  className="form-radio h-4 w-4 text-brand-accent border-neutral-300 focus:ring-brand-accent" 
                />
                <span className="ml-3 text-sm font-light group-hover:text-brand-accent transition-colors">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Volume */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-neutral-400">Volume</h4>
          <div className="flex flex-wrap gap-2">
            {data.volumes.map((item) => (
               <button 
                key={item.id}
                className={`px-3 py-1.5 border text-xs font-medium rounded-sm transition-all ${
                  item.selected 
                    ? 'border-brand-accent text-brand-accent' 
                    : 'border-neutral-200 hover:border-brand-accent hover:text-brand-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
