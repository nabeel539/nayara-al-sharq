"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import { projectsData, categories } from "@/data/projectsData";
import Pretitle from "./Pretitle";

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Listen for project navigation events
  useEffect(() => {
    const handleProjectChange = (event) => {
      setSelectedProject(event.detail);
      setIsModalOpen(true);
    };

    window.addEventListener("projectchange", handleProjectChange);
    return () =>
      window.removeEventListener("projectchange", handleProjectChange);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <section className="pt-16 xl:pt-32" id="work">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* HEADER */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 xl:mb-20"
          >
            <motion.div variants={itemVariants}>
              <Pretitle text="Our Projects" center />
            </motion.div>

            <motion.h2 variants={itemVariants} className="h2 mb-6">
              Our Premium Projects
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
            >
              Explore our impressive portfolio of completed projects showcasing
              expertise, precision, and commitment to delivering outstanding
              engineering solutions across diverse sectors.
            </motion.p>
          </motion.div>

          {/* CATEGORY FILTER */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16 xl:mb-20"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 font-medium text-xs sm:text-sm transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-accent text-primary border-accent shadow-lg shadow-accent/50"
                    : "border-secondary/20 text-secondary/70 hover:text-secondary hover:border-secondary/40 hover:bg-secondary/5"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* PROJECTS GRID */}
          <ProjectGrid
            projects={projectsData}
            onOpenModal={handleOpenModal}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      {/* PROJECT MODAL */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
        allProjects={projectsData}
      />
    </>
  );
};

export default ProjectSection;
