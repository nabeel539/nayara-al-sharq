"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const CertificateModal = ({ isOpen, certificate, clientName, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* MODAL CONTENT */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto scrollbar-hide"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-white my-auto max-h-[90vh] overflow-y-auto"
            >
              {/* HEADER */}
              <div className="sticky top-0 z-10 bg-white border-b border-secondary/10 p-4 sm:p-6 flex items-center justify-between">
                <div>
                  <p className="text-secondary/60 text-sm uppercase tracking-wide font-medium mb-1">
                    Certificate
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    {clientName}
                  </h2>
                </div>

                {/* CLOSE BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="flex-shrink-0 w-10 h-10 bg-secondary/5 hover:bg-secondary/10 flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-primary" />
                </motion.button>
              </div>

              {/* CERTIFICATE IMAGE */}
              <div className="p-4 sm:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative w-full aspect-video bg-secondary/5 overflow-hidden"
                >
                  <Image
                    src={certificate}
                    alt={`${clientName} Certificate`}
                    fill
                    quality={100}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </motion.div>

                {/* FOOTER ACTION */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-6 flex gap-3 justify-end"
                >
                  <button
                    onClick={onClose}
                    className="px-6 py-3 border border-secondary/20 hover:border-secondary/40 text-primary hover:bg-secondary/5 transition-all duration-300 font-medium text-sm"
                  >
                    Close
                  </button>
                  <a
                    href={certificate}
                    download
                    className="px-6 py-3 bg-accent text-primary hover:bg-accent/90 transition-colors duration-300 font-medium text-sm"
                  >
                    Download
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
