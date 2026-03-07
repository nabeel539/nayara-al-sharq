"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectGallery from "./ProjectGallery";

const ProjectModal = ({ isOpen, project, onClose, allProjects }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const previousProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];

  const handlePrevious = () => {
    // Trigger close animation then open next
    document.querySelector("[data-modal-content]")?.addEventListener(
      "animationend",
      () => {
        window.dispatchEvent(
          new CustomEvent("projectchange", { detail: previousProject }),
        );
      },
      { once: true },
    );
  };

  const handleNext = () => {
    window.dispatchEvent(
      new CustomEvent("projectchange", { detail: nextProject }),
    );
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1 },
    },
    exit: { y: 50, opacity: 0, transition: { duration: 0.2 } },
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
              data-modal-content
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white my-auto max-h-[90vh] overflow-y-auto scrollbar-custom"
            >
              {/* HEADER */}
              <div className="sticky top-0 z-10 bg-white border-b border-secondary/10 p-4 sm:p-6 flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="px-3 py-1.5 bg-accent w-fit"
                    >
                      <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
                        {project.category}
                      </span>
                    </motion.div>
                    {project.year && (
                      <span className="text-secondary/60 text-xs sm:text-sm font-medium">
                        {project.year}
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-bold text-primary font-primary line-clamp-3">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-2 text-secondary/70 text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>{project.location}</span>
                    {project.client && (
                      <>
                        <div className="w-2 h-2 rounded-full bg-secondary/20" />
                        <span className="hidden sm:inline">
                          {project.client}
                        </span>
                      </>
                    )}
                  </div>
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

              {/* CONTENT */}
              <div className="p-4 sm:p-6 space-y-8">
                {/* GALLERY */}
                <ProjectGallery images={project.images} title={project.title} />

                {/* DESCRIPTION */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-primary font-primary">
                    About this Project
                  </h2>
                  <p className="text-secondary/70 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* PROJECT DETAILS GRID */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-secondary/10">
                    <div>
                      <p className="text-secondary/50 text-xs uppercase tracking-wider font-medium mb-1">
                        Category
                      </p>
                      <p className="text-primary font-semibold text-sm">
                        {project.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-secondary/50 text-xs uppercase tracking-wider font-medium mb-1">
                        Location
                      </p>
                      <p className="text-primary font-semibold text-sm">
                        {project.location}
                      </p>
                    </div>
                    {project.year && (
                      <div>
                        <p className="text-secondary/50 text-xs uppercase tracking-wider font-medium mb-1">
                          Year
                        </p>
                        <p className="text-primary font-semibold text-sm">
                          {project.year}
                        </p>
                      </div>
                    )}
                    {project.client && (
                      <div>
                        <p className="text-secondary/50 text-xs uppercase tracking-wider font-medium mb-1">
                          Client
                        </p>
                        <p className="text-primary font-semibold text-sm">
                          {project.client}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* FOOTER NAVIGATION */}
              <div className="sticky bottom-0 border-t border-secondary/10 bg-white p-4 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onClose()}
                    className="flex-1 px-4 py-3 border border-secondary/20 hover:border-secondary/40 text-primary hover:bg-secondary/5 transition-all duration-300 font-medium text-sm"
                  >
                    Close
                  </motion.button>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        onClose();
                        setTimeout(
                          () =>
                            window.dispatchEvent(
                              new CustomEvent("projectchange", {
                                detail: previousProject,
                              }),
                            ),
                          300,
                        );
                      }}
                      className="w-10 h-10 border border-secondary/20 hover:border-secondary/40 flex items-center justify-center text-primary hover:bg-secondary/5 transition-all duration-300"
                      aria-label="Previous project"
                      title={`Previous: ${previousProject.title}`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    <span className="text-secondary/50 text-xs font-medium px-3 py-1">
                      {currentIndex + 1} / {allProjects.length}
                    </span>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        onClose();
                        setTimeout(
                          () =>
                            window.dispatchEvent(
                              new CustomEvent("projectchange", {
                                detail: nextProject,
                              }),
                            ),
                          300,
                        );
                      }}
                      className="w-10 h-10 border border-secondary/20 hover:border-secondary/40 flex items-center justify-center text-primary hover:bg-secondary/5 transition-all duration-300"
                      aria-label="Next project"
                      title={`Next: ${nextProject.title}`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
