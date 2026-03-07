"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TrustedClientsStrip = ({ clients }) => {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="mb-16 sm:mb-20 xl:mb-24">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12"
      >
        <p className="text-secondary/60 text-sm uppercase tracking-widest font-medium mb-2">
          Trusted By Leading Companies
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-primary">
          Our Valued Clients
        </h3>
      </motion.div>

      {/* CLIENTS GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8"
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="flex items-center justify-center h-20 bg-white border border-secondary/10 p-4 transition-all duration-300 hover:border-secondary/20 hover:shadow-md"
          >
            <div className="relative w-full h-full">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedClientsStrip;
