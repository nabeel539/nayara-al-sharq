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
      <div className="relative overflow-hidden aspect-square bg-black/5 shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* IMAGE */}
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          quality={100}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* GRADIENT OVERLAY - STATIC */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* ANIMATED OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* CONTENT CONTAINER */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 text-white">
          {/* TOP - CATEGORY BADGE */}
          <div className="flex items-start justify-between gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1 : 0.95,
              }}
              transition={{ duration: 0.3 }}
              className="px-3 py-1.5 bg-accent backdrop-blur-sm"
            >
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
                {project.category}
              </span>
            </motion.div>

            {/* VIEW ICON - APPEARS ON HOVER */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0,
              }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          </div>

          {/* BOTTOM - TITLE & LOCATION */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0.9,
            }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-primary line-clamp-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-medium">{project.location}</span>
            </div>

            {/* DESCRIPTION - APPEARS ON HOVER */}
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
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
