"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import CertificateModal from "./CertificateModal";
import TrustedClientsStrip from "./TrustedClientsStrip";
import Pretitle from "./Pretitle";
import { testimonials, trustedClients } from "@/data/testimonialsData";

const TestimonialsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCertificate = (testimonial) => {
    setSelectedCertificate(testimonial);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    document.body.style.overflow = "unset";
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

  // Separate featured and regular testimonials
  const featuredTestimonial = testimonials.find((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <>
      <section className="pt-16 xl:pt-32" id="testimonials">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* SECTION HEADER */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 xl:mb-20"
          >
            <motion.div variants={itemVariants}>
              <Pretitle text="Client Testimonials" center />
            </motion.div>

            <motion.h2 variants={itemVariants} className="h2 mb-6">
              Trusted By Industry Leaders
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
            >
              See how our expertise and commitment to excellence have earned the
              trust and recognition of leading companies across the region.
            </motion.p>
          </motion.div>

          {/* TRUSTED CLIENTS STRIP */}
          {/* <TrustedClientsStrip clients={trustedClients} /> */}

          {/* TESTIMONIALS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* FEATURED TESTIMONIAL - LARGER */}
            {featuredTestimonial && (
              <TestimonialCard
                testimonial={featuredTestimonial}
                onViewCertificate={handleViewCertificate}
                index={0}
                featured={true}
              />
            )}

            {/* REGULAR TESTIMONIALS */}
            {regularTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onViewCertificate={handleViewCertificate}
                index={featuredTestimonial ? index + 1 : index}
                featured={false}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      <CertificateModal
        isOpen={isModalOpen}
        certificate={selectedCertificate?.certificate}
        clientName={selectedCertificate?.client}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default TestimonialsSection;
