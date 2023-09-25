import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function SlideIn({children, isVisible}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } }}
          exit={{ x: 100, opacity: 0, transition: { duration: 5, ease: 'easeOut' } }}
          className="fixed top-0 right-0 z-10"
        >{children}</motion.div>
      )}
    </AnimatePresence>
  );
}
