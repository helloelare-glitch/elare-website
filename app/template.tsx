"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{
          opacity: 0,
          y: 12,
          scale: 0.99,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -12,
          scale: 0.99,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1], // smoother than easeInOut
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}