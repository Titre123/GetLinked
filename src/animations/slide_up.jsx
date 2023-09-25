import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function SlideUp({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const width = window.innerWidth;

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75, delay }}
      ref={ref}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}