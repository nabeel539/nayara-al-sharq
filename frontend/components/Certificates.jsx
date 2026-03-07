"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Pretitle from "./Pretitle";

const certs = [
  {
    src: "/assets/img/Certificates/Certificate1.jpeg",
    title: "Commercial Registration",
    orientation: "landscape",
  },
  {
    src: "/assets/img/Certificates/Certificate4.jpeg",
    title: "VAT Certificate",
    orientation: "portrait",
  },
  {
    src: "/assets/img/Certificates/Certificate2.jpeg",
    title: "Unified Business Number",
    orientation: "portrait",
  },
  {
    src: "/assets/img/Certificates/Certificate3.jpeg",
    title: "Compliance Certificate",
    orientation: "landscape",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      {/* Animated background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/3 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <Pretitle text="Certifications" center={true} />
          <h2 className="h2 mb-4 md:mb-6">Verified Credentials</h2>
          <p className="text-secondary leading-relaxed text-base md:text-lg">
            Official certifications validating our compliance, operational
            standards, and commitment to quality across all engineering and
            construction projects.
          </p>
        </motion.div>

        {/* Certificate gallery */}
        <CertificateGallery certificates={certs} />
      </div>
    </section>
  );
}

function CertificateGallery({ certificates }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-max"
    >
      {certificates.map((cert, idx) => (
        <CertificateCard key={idx} cert={cert} index={idx} />
      ))}
    </motion.div>
  );
}

function CertificateCard({ cert, index }) {
  const isLandscape = cert.orientation === "landscape";
  const aspectRatio = isLandscape ? "aspect-[4/3]" : "aspect-[3/4]";

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative flex flex-col overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:-translate-y-3 ${
        isLandscape ? "lg:col-span-2" : ""
      }`}
    >
      {/* Frame container - White background with padding for framed look */}
      <div className="flex flex-col h-full bg-white p-3 md:p-4 lg:p-5">
        {/* Certificate image frame */}
        <a
          href={cert.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${cert.title} certificate`}
          className="relative flex-1 overflow-hidden rounded-lg bg-gray-50 border border-gray-100 group-hover:border-accent/30 transition-colors duration-300"
        >
          <div className={`relative w-full h-full ${aspectRatio}`}>
            <Image
              src={cert.src}
              alt={cert.title}
              fill
              className="object-contain p-1 md:p-2 transition-transform duration-500 group-hover:scale-102"
              priority={index < 4}
            />
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center rounded-lg"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg"
            >
              <FiExternalLink className="text-primary text-xl" />
            </motion.div>
          </motion.div>
        </a>

        {/* Certificate info footer */}
        <div className="mt-3 md:mt-4 lg:mt-5 pt-3 md:pt-4 lg:pt-5 border-t border-gray-100">
          <h3 className="text-primary font-semibold text-sm md:text-base leading-tight">
            {cert.title}
          </h3>

          {/* Subtle decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="h-0.5 w-8 bg-accent mt-2.5 origin-left"
          />
        </div>
      </div>

      {/* Subtle border accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-accent/50 origin-left"
      />
    </motion.div>
  );
}
