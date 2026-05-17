"use client";

import React from "react";
import { motion } from "framer-motion";
import Pretitle from "./Pretitle";

const workflowSteps = [
  "Site Inspection & Permissions",
  "Material Reception & Verification",
  "Tower Erection & Structural Works",
  "Feeder Cable Routing",
  "Grounding & Electrical Integration",
  "Equipment Installation",
  "Testing & Commissioning",
  "Final Quality Inspection",
];

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TelecomWorkflow() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <Pretitle text="Execution Process" center />

          <h2 className="h2 mb-4 md:mb-6 text-white">Tower Installation Workflow</h2>

          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            Our structured telecom execution process ensures safety, compliance, and reliable delivery at every stage.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#111111] border border-white/5 p-6 hover:border-accent/30 transition-all duration-300 group relative"
            >
              {/* Number */}
              <div className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                {step}
              </h3>
              
              {/* Connector line (hidden on mobile, visible on desktop for flow) */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/5 z-0" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
