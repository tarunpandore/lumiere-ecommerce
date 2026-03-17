"use client";

import { ProductCard } from './ProductCard';
import { motion, type Variants } from 'framer-motion';

interface CollectionProps {
  data: {
    title: string;
    subtitle: string;
    products: Array<{
      id: string;
      name: string;
      notes: string;
      price: number;
      imageSrc: string;
      imageAlt: string;
      aspectRatio: string;
      masonry: boolean;
    }>;
  };
}

export function Collection({ data }: CollectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-32 px-8 md:px-20 bg-white" id="collections">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-neutral-100 pb-12"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-normal text-neutral-900">{data.title}</motion.h2>
          <motion.p variants={itemVariants} className="mt-4 md:mt-0 text-neutral-400 text-xs uppercase tracking-widest">{data.subtitle}</motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 items-start"
        >
          {data.products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
