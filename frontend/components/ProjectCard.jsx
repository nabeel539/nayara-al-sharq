"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, onOpenModal, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onOpenModal(project);
  };

  const hasImage = project.images && project.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full cursor-pointer"
    >
      <div className={`relative overflow-hidden aspect-square ${hasImage ? 'bg-black/5' : 'bg-[#1a1a1a] border border-white/5'} shadow-lg hover:shadow-2xl transition-all duration-500`}>
        {/* IMAGE */}
        {hasImage && (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            quality={100}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* GRADIENT OVERLAY - STATIC */}
        {hasImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        )}

        {/* ANIMATED OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* CONTENT CONTAINER */}
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 text-white">
          {/* TOP - CATEGORY & BADGES */}
          <div className="flex items-start justify-between gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.3 }}
              className="px-3 py-1.5 bg-accent backdrop-blur-sm"
            >
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                {project.category}
              </span>
            </motion.div>

            {/* VIEW ICON - APPEARS ON HOVER or STATIC if no image */}
            <motion.div
              initial={{ opacity: hasImage ? 0 : 0.7, scale: hasImage ? 0 : 1 }}
              animate={{
                opacity: isHovered || !hasImage ? 1 : 0,
                scale: isHovered || !hasImage ? 1 : 0,
              }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* BOTTOM - TITLE & DETAILS */}
          <motion.div
            initial={{ y: hasImage ? 20 : 0, opacity: hasImage ? 0 : 1 }}
            animate={{
              y: isHovered || !hasImage ? 0 : 20,
              opacity: isHovered || !hasImage ? 1 : 0.9,
            }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-lg sm:text-xl font-bold font-primary line-clamp-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            {/* Client / Company */}
            {project.client && (
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="text-accent text-xs uppercase font-medium">Client:</span>
                <span className="font-medium">{project.client}</span>
              </div>
            )}

            {/* Site Count (Telecom specific or generic) */}
            {project.sites && (
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="text-accent text-xs uppercase font-medium">Sites:</span>
                <span className="font-medium">{project.sites}</span>
              </div>
            )}

            {/* Location */}
            {project.category !== "Telecom" && (
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{project.location}</span>
              </div>
            )}

            {/* DESCRIPTION - APPEARS ON HOVER or STATIC if no image */}
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered || !hasImage ? 1 : 0,
                height: isHovered || !hasImage ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-white/70 text-xs leading-relaxed line-clamp-2 mt-2"
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>

        {/* BORDER ON HOVER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-accent/50 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
