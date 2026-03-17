import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Story } from "@/components/Story";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { collectionData } from "@/data/collectionData";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Collection data={collectionData} />
      <Story />
      <Newsletter />
      <Footer />
    </main>
  );
}
