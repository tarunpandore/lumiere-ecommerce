"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export function Story() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="py-40 bg-neutral-50 px-8 md:px-20 overflow-hidden" id="story">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative group p-10 lg:p-0">
              <div className="relative w-full aspect-[16/10]">
                 <Image 
                  alt="Fragrance Creation Process" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK8Z3pA3XUp2rEo8ffBXCIygeHM7duVUZh1491Ymrfk7T2VmJJrmsfknzSSEVbGjksyoAacxMbq4hdrNEUCrhbKMFbf7kVZznpsDFS2p4KwtYdNHpSkYgVvavF4kdSVMr8CZc09N0laqbFBh-E-ry3fVtKtN3whlmpVv314lKW07yNIWTslmrThuaBWHe6oCAdkdmlTrPlyHHHMjQkhwK0kvnq54MnrYBEOYNYGuTwIDJPMHygru8JbiAyd5OHoc6XudQRLtNFJe8D" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden xl:block w-48 h-48 bg-white p-8 shadow-sm z-10">
                <p className="text-[10px] uppercase tracking-[0.3em] leading-relaxed relative z-20">
                  Handcrafted in Grasse, France.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-normal mb-12 leading-tight">
              The Art of <br />Fragrance
            </motion.h2>
            <div className="space-y-8 max-w-md">
                <motion.p variants={itemVariants} className="text-neutral-500 font-sans text-sm md:text-base leading-loose font-light">
                  At Lumière, we believe a fragrance is more than just a scent—it&apos;s a spectrum of memories captured in a bottle. Each creation is an alchemy of light and rare botanicals.
                </motion.p>
                <motion.p variants={itemVariants} className="text-neutral-500 font-sans text-sm md:text-base leading-loose font-light">
                  Our master perfumers blend the alchemy of light with the depth of the earth to create olfactory masterpieces that evolve on your skin.
                </motion.p>
              
              <motion.div variants={itemVariants}>
                <Link href="#" className="group inline-flex items-center text-[10px] uppercase tracking-[0.3em] border-b border-brand pb-2 mt-4 hover:opacity-50 transition-all">
                    Explore the craft
                    <span className="material-symbols-outlined ml-4 !text-sm group-hover:translate-x-2 transition-transform">east</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
