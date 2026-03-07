"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, onOpenModal, selectedCategory }) => {
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
    >
      {filteredProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onOpenModal={onOpenModal}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
