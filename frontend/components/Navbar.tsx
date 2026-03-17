"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedLumiere');
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem('hasVisitedLumiere', 'true');
    }
  }, []);

  const isLanding = pathname === '/';
  const shouldAnimate = isLanding && isFirstVisit;

  return (
    <motion.nav 
      initial={shouldAnimate ? { y: -100, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: shouldAnimate ? 3 : 0 }}
      className="fixed top-0 left-0 w-full z-50 text-white" 
      data-purpose="main-navigation"
    >
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 h-24 flex items-center justify-between text-white mix-blend-difference">
        <motion.div 
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldAnimate ? 3.4 : 0, duration: 0.6 }}
          className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-medium"
        >
          <Link href="/collections" className="hover:opacity-60 transition-opacity">
            Collections
          </Link>
          <Link href="/story" className="hover:opacity-60 transition-opacity">
            Our Story
          </Link>
        </motion.div>
        
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2">
          <Link href="/">
            <h1 className="font-serif text-3xl font-normal not-italic tracking-tighter cursor-pointer">Lumière</h1>
          </Link>
        </div>
        
        <motion.div 
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldAnimate ? 3.4 : 0, duration: 0.6 }}
          className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.3em] font-medium"
        >
          <Link href="#" className="hidden md:block hover:opacity-60 transition-opacity">
            Account
          </Link>
          <button className="flex items-center">
            <span className="material-symbols-outlined !text-[20px]">shopping_bag</span>
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
