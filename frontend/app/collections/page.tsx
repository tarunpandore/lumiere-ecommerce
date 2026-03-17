import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CatalogPageBanner } from "@/components/CatalogPageBanner";
import { CatalogLayout } from "@/components/CatalogLayout";
import { catalogPageData } from "@/data/catalogPageData";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-[#faf9f6]">
      <Navbar />
      <div className="flex-1">
        <CatalogPageBanner data={catalogPageData.banner} />
        <CatalogLayout data={catalogPageData} />
      </div>
      <Footer />
    </div>
  );
}
