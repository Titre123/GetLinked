import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function SlideUp({children, isVisible}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } }}
          exit={{ x: 100, opacity: 0, transition: { duration: 5, ease: 'easeOut' } }}
        >{children}</motion.div>
      )}
    </AnimatePresence>
  );
}
