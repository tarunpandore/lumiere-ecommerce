"use client";

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 3,
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

  return (
    <section className="relative h-screen w-full flex items-end justify-start overflow-hidden" data-purpose="hero-banner" id="hero">
      <div className="absolute inset-0 z-0">
        <video 
          src="/videos/hero_section.mp4" 
          autoPlay 
          muted 
          playsInline
          className="w-full h-full object-cover" 
        />
        <motion.div 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 0.4 }} 
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black"
        ></motion.div>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      <div className="relative z-10 w-full px-8 md:px-20 pb-20 max-w-5xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.span variants={itemVariants} className="text-white text-[10px] uppercase tracking-[0.3em] block font-medium opacity-80">
            Collection Printemps 2024
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-white text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-normal">
            Capturing <br /> <span className="pl-12 md:pl-24">Radiance</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="pt-8 flex flex-col md:flex-row md:items-center gap-8">
            <Link 
              href="/collections"
              className="inline-block border border-white text-white px-12 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
            >
             Shop the Collection
            </Link>
            <p className="text-white/60 text-xs tracking-widest uppercase max-w-xs leading-relaxed">
              An olfactory journey inspired by the golden hour in the hills of Grasse.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
