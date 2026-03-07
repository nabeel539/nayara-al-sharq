"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectGallery = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full">
      {/* MAIN GALLERY */}
      <div className="relative w-full aspect-video overflow-hidden bg-black/20 mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              fill
              priority={currentImageIndex === 0}
              quality={100}
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 70vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* NAVIGATION ARROWS */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10 group"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:translate-x-0 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10 group"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0 transition-transform" />
            </button>
          </>
        )}

        {/* IMAGE COUNTER */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
          <p className="text-white text-xs font-medium tracking-wide">
            {currentImageIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* THUMBNAIL CAROUSEL */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={(e) => goToImage(index, e)}
              className={`relative flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${
                currentImageIndex === index
                  ? "border-accent scale-105"
                  : "border-transparent hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                quality={75}
                className="object-cover"
              />
              {currentImageIndex === index && (
                <motion.div
                  layoutId="activeThumb"
                  className="absolute inset-0 bg-accent/20 pointer-events-none"
                />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
