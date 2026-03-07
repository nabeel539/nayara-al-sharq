"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Pretitle from "./Pretitle";

const values = [
  { title: "Quality", desc: "Uncompromising standards in every project." },
  { title: "Integrity", desc: "Honesty and transparency at every step." },
  {
    title: "Innovation",
    desc: "Cutting-edge solutions for modern challenges.",
  },
  { title: "Reliability", desc: "Delivering on our promises, always." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const valueVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-accent/5 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <Pretitle text="Our Mission & Vision" center />

          <h2 className="h2 mb-4 md:mb-6">
            Engineering Excellence.{" "}
            <span className="text-accent">Building Trust.</span>
          </h2>

          <p className="text-secondary leading-relaxed text-base md:text-lg">
            We deliver reliable construction, engineering, and technical
            solutions that combine precision, safety, and innovation. Our
            commitment is to create durable, efficient, and future-ready
            infrastructure that exceeds client expectations across every project
            we undertake.
          </p>
        </motion.div>

        {/* Main grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          {/* ---------- MISSION CARD ---------- */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 md:p-10 overflow-hidden group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2"
          >
            {/* subtle top accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-accent/50 origin-left"
            />

            {/* animated glow shape */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl transition group-hover:from-accent/25"
            />

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h3 mb-4 md:mb-6 relative z-10 text-primary"
            >
              Our Mission
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-secondary mb-8 md:mb-10 leading-relaxed relative z-10 text-sm md:text-base"
            >
              To build spaces that inspire, enrich, and endure, with a focus on
              quality, sustainability, and customer satisfaction.
            </motion.p>

            {/* values grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 md:gap-5 relative z-10"
            >
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  variants={valueVariants}
                  className="border border-border/50 rounded-md p-4 md:p-5 bg-white transition-all duration-300 hover:border-accent/60 hover:shadow-md hover:bg-accent/5 group/value"
                >
                  <h4 className="font-semibold text-primary text-sm md:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover/value:scale-150 transition-transform" />
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-secondary mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------- VISION CARD ---------- */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-primary to-primary/95 text-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-8 md:p-10 overflow-hidden group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-2"
          >
            {/* accent top line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-accent/50 origin-left"
            />

            {/* animated glow shape */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
            />

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h3 mb-4 md:mb-6 text-white relative z-10"
            >
              Our Vision
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="leading-relaxed text-white/95 relative z-10 mb-8 text-sm md:text-base"
            >
              Leading the way in modern construction by blending innovation,
              tradition, and technology to shape infrastructure that stands the
              test of time and defines industry standards.
            </motion.p>

            {/* accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-12 md:w-16 h-1 bg-gradient-to-r from-accent to-accent/50 origin-left relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
