"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const TestimonialCard = ({
  testimonial,
  onViewCertificate,
  index,
  featured = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    rest: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)" },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.12)",
    },
  };

  return (
    <motion.div
      custom={index}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={featured ? "sm:col-span-2 lg:col-span-3" : ""}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardVariants}
        className="h-full bg-white border border-secondary/10 p-6 sm:p-8 transition-all duration-300"
      >
        {/* FEATURED BADGE */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4"
          >
            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
              Featured Client
            </span>
          </motion.div>
        )}

        {/* MESSAGE - with fade animation on hover */}
        <motion.p
          initial={{ opacity: 0.95 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-secondary/80 leading-relaxed mb-6 italic text-base"
        >
          "{testimonial.message}"
        </motion.p>

        {/* CLIENT INFO */}
        <div className="border-t border-secondary/10 pt-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-primary mb-1">
              {testimonial.client}
            </h3>
            <p className="text-secondary/60 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {testimonial.location}
            </p>
          </div>

          {/* PROJECT */}
          {testimonial.project && (
            <p className="text-secondary/70 text-sm mb-4">
              <span className="font-semibold text-secondary">Project:</span>{" "}
              {testimonial.project}
            </p>
          )}

          {/* CERTIFICATE BUTTON */}
          {testimonial.certificate && (
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewCertificate(testimonial)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              View Certificate
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
