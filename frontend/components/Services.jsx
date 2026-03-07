// "use client"
// import React from 'react'

// import {
//     PiWallFill, PiHammerFill,
//     PiLightbulbFilamentFill,
//     PiLightningFill,
//     PiFanFill,
//     PiShieldCheckFill,
//     PiCpuFill,
// } from "react-icons/pi";
// import {
//     Tabs,
//     TabsList,
//     TabsTrigger,
//     TabsContent,
// } from "@/components/ui/tabs";
// import { motion, AnimatePresence } from "framer-motion";
// import Pretitle from './Pretitle';

// const serviceData = [
//     {
//         name: "construction",
//         icon: <PiWallFill />,
//         title: "Construction Services",
//         description:
//             "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
//         serviceList: [
//             "Residential Builds",
//             "Structural Design",
//             "Site Prep",
//             "Concrete Work",
//             "Framing & Roofing",
//             "Interior Finish",
//         ],
//         thumbs: [
//             { url: "/assets/img/services/thumb-1.jpg" },
//             { url: "/assets/img/services/thumb-2.jpg" },
//         ],
//     },
//     {
//         name: "restoration",
//         icon: <PiHammerFill />,
//         title: "Restoration Services",
//         description:
//             "We restore and reinforce existing structures with expert care, combining modern techniques with industry standards to bring buildings back to life safely and efficiently.",
//         serviceList: [
//             "Structural Repair",
//             "Concrete Restoration",
//             "Water Damage Repair",
//             "Facade Renewal",
//             "Roof Restoration",
//             "Interior Refurbishment",
//         ],
//         thumbs: [
//             { url: "/assets/img/services/thumb-1.jpg" },
//             { url: "/assets/img/services/thumb-2.jpg" },
//         ],
//     },
//     {
//         name: "consulting",
//         icon: <PiLightbulbFilamentFill />,
//         title: "Engineering Consulting",
//         description:
//             "Our consulting services guide projects from planning to execution with expert insight, ensuring cost efficiency, structural integrity, and compliance with all safety standards.",
//         serviceList: [
//             "Project Planning",
//             "Feasibility Studies",
//             "Cost Estimation",
//             "Design Consultation",
//             "Risk Assessment",
//             "Technical Audits",
//         ],
//         thumbs: [
//             { url: "/assets/img/services/thumb-1.jpg" },
//             { url: "/assets/img/services/thumb-2.jpg" },
//         ],
//     },
//     {
//         name: "electrical",
//         icon: <PiLightningFill />,
//         title: "Electrical Systems",
//         description:
//             "We deliver reliable electrical infrastructure solutions designed for safety, efficiency, and long-term performance across commercial and industrial facilities.",
//         serviceList: [
//             "Electrical Installation",
//             "Power Distribution",
//             "Panel Installation",
//             "Lighting Systems",
//             "Maintenance",
//             "Testing & Commissioning",
//         ],
//         thumbs: [
//             { url: "/assets/img/services/thumb-1.jpg" },
//             { url: "/assets/img/services/thumb-2.jpg" },
//         ],
//     },
//     {
//         name: "hvac",
//         icon: <PiFanFill />,
//         title: "HVAC Solutions",
//         description:
//             "Our HVAC systems are engineered for optimal comfort, energy efficiency, and climate control using advanced technologies and precise installation standards.",
//         serviceList: [
//             "Chiller Installation",
//             "Ventilation Systems",
//             "Cooling Solutions",
//             "Heating Systems",
//             "Duct Fabrication",
//             "Maintenance Services",
//         ],
//         thumbs: [
//             { url: "/assets/img/services/thumb-1.jpg" },
//             { url: "/assets/img/services/thumb-2.jpg" },
//         ],
//     },
//     {
//         name: "security",
//         icon: <PiShieldCheckFill />,
//         title: "Security Systems",
//         description:
//             "We implement advanced security and surveillance systems designed to protect facilities, assets, and personnel with smart monitoring technologies.",
//         serviceList: [
//             "CCTV Installation",
//             "Access Control",
//             "Intrusion Detection",
//             "Fire Alarm Systems",
//             "Voice Evacuation",
//             "Monitoring Systems",
//         ],
//         thumbs: [
//             { url: "/assets/img/services/thumb-1.jpg" },
//             { url: "/assets/img/services/thumb-2.jpg" },
//         ],
//     },
//     {
//         name: "bms",
//         icon: <PiCpuFill />,
//         title: "Building Management Systems",
//         description:
//             "Our smart BMS solutions automate and monitor building operations, optimizing energy use, improving efficiency, and ensuring seamless facility management.",
//         serviceList: [
//             "Energy Monitoring",
//             "Automation Controls",
//             "System Integration",
//             "Performance Optimization",
//             "Remote Monitoring",
//             "Maintenance Alerts",
//         ],
//         thumbs: [
//             { url: "/assets/img/services/thumb-1.jpg" },
//             { url: "/assets/img/services/thumb-2.jpg" },
//         ],
//     },

// ];

// const Services = () => {
//     const [activeTab, setActiveTab] = React.useState(serviceData[0].name);
//     return (
//         <section className='pt-16 xl:pt-32' id='services'>
//             <div className='container mx-auto'>

//                 <Pretitle text='Our Services' center />

//                 <div>
//                     <h2 className='h2 mb-3 text-center'>Solutions We Provide</h2>
//                     <p className='mb-11 max-w-[480px] mx-auto text-center'>
//                         Offering comprehensive engineering and construction services tailored to meet the unique needs of each client.
//                     </p>
//                 </div>

//                 {/* TABS */}
//                 <Tabs
//                     defaultValue={serviceData[0].name}
//                     value={activeTab}
//                     onValueChange={setActiveTab}
//                     className="w-full"
//                 >

//                     {/* TAB LIST */}
//                     <TabsList
//                         className="
//           relative z-10
//           w-full p-0 bg-transparent
//           mb-[40px] sm:mb-[50px]

//           grid grid-cols-4 gap-3
//           sm:flex sm:flex-wrap sm:justify-center sm:gap-[12px]
//         "
//                     >
//                         {serviceData.map((service) => (
//                             <TabsTrigger
//                                 key={service.name}
//                                 value={service.name}
//                                 className="
//               flex items-center justify-center
//               sm:justify-start
//               gap-2 sm:gap-3

//               px-0 sm:px-5
//               py-1.5 sm:py-3

//               bg-[#f4f4f4]
//               rounded-none
//               border border-transparent

//               transition-all duration-200

//               data-[state=active]:bg-white
//               data-[state=active]:border-primary
//               data-[state=active]:shadow-md

//               hover:shadow-sm

//               w-full sm:w-auto
//               text-[11px] sm:text-[12px]
//             "
//                             >

//                                 {/* ICON */}
//                                 <div
//                                     className={`w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] flex items-center justify-center rounded-none transition-colors duration-300 ${activeTab === service.name
//                                         ? "bg-primary text-white"
//                                         : "bg-accent text-black"
//                                         }`}
//                                 >
//                                     <div className="text-[16px] sm:text-xl">
//                                         {service.icon}
//                                     </div>
//                                 </div>

//                                 {/* TITLE */}
//                                 <div className="uppercase font-primary font-semibold tracking-[0.5px] hidden sm:block">
//                                     {service.name}
//                                 </div>

//                             </TabsTrigger>
//                         ))}
//                     </TabsList>

//                     {/* CONTENT PANEL */}
//                     <div className="relative z-0 bg-white shadow-custom rounded-none w-full
//                       pt-[28px] sm:pt-[30px] md:pt-[40px]
//                       px-[20px] sm:px-[30px] md:px-[40px]
//                       pb-[20px] sm:pb-[30px] md:pb-[40px]">

//                         <AnimatePresence mode="wait">
//                             {serviceData.map((service) =>
//                                 service.name === activeTab ? (
//                                     <TabsContent key={service.name} value={service.name} forceMount>

//                                         <motion.div
//                                             initial={{ opacity: 0, y: 15 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             exit={{ opacity: 0, y: -15 }}
//                                             transition={{ duration: 0.4 }}
//                                             className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[30px] md:gap-[40px] items-start"
//                                         >

//                                             {/* LEFT TEXT */}
//                                             <div>
//                                                 <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-[0.5px] mb-4 sm:mb-5 text-primary">
//                                                     {service.title}
//                                                 </h3>

//                                                 <p className="mb-4 sm:mb-6 text-[13px] sm:text-[14px] text-secondary leading-relaxed">
//                                                     {service.description}
//                                                 </p>

//                                                 <ul className="space-y-2 sm:space-y-3">
//                                                     {service.serviceList.map((item, i) => (
//                                                         <motion.li
//                                                             key={i}
//                                                             initial={{ opacity: 0, x: -15 }}
//                                                             animate={{ opacity: 1, x: 0 }}
//                                                             transition={{ delay: i * 0.05 }}
//                                                             className="flex items-center text-[12px] sm:text-[13px]"
//                                                         >
//                                                             <span className="w-[5px] sm:w-[6px] h-[5px] sm:h-[6px] bg-accent inline-block mr-2 sm:mr-3 flex-shrink-0" />
//                                                             {item}
//                                                         </motion.li>
//                                                     ))}
//                                                 </ul>
//                                             </div>

//                                             {/* RIGHT IMAGES */}
//                                             <div className="flex gap-3 sm:gap-4">
//                                                 {service.thumbs.map((img, i) => (
//                                                     <motion.img
//                                                         key={i}
//                                                         src={img.url}
//                                                         alt={service.title}
//                                                         initial={{ opacity: 0, scale: 1.05 }}
//                                                         animate={{ opacity: 1, scale: 1 }}
//                                                         transition={{ delay: 0.15 * i, duration: 0.5 }}
//                                                         className="w-1/2 object-cover rounded-none"
//                                                     />
//                                                 ))}
//                                             </div>

//                                         </motion.div>

//                                     </TabsContent>
//                                 ) : null
//                             )}
//                         </AnimatePresence>

//                     </div>

//                 </Tabs>
//             </div>
//         </section>

//     )
// }

// export default Services
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  PiBuildingsFill,
  PiLightningFill,
  PiGearFill,
  PiFireFill,
  PiCamera,
  PiFanFill,
  PiCpuFill,
  PiWifiHighFill,
  PiRobotFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    id: 1,
    name: "Building Construction",
    icon: <PiBuildingsFill className="w-8 h-8" />,
    description:
      "We execute residential, commercial, and industrial construction projects with precision, safety compliance, and strict quality standards from planning to delivery.",
    features: [
      "Civil Construction",
      "Structural Works",
      "Project Execution",
      "Site Management",
      "Finishing Works",
      "Turnkey Projects",
    ],
  },
  {
    id: 2,
    name: "Electrical Works",
    icon: <PiLightningFill className="w-8 h-8" />,
    description:
      "End-to-end electrical infrastructure services designed for reliability, performance, and compliance with international safety standards.",
    features: [
      "Electrical Installation",
      "Panel Wiring",
      "Power Distribution",
      "Lighting Systems",
      "Testing",
      "Commissioning",
    ],
  },
  {
    id: 3,
    name: "Mechanical Works",
    icon: <PiGearFill className="w-8 h-8" />,
    description:
      "Comprehensive mechanical engineering solutions for industrial and commercial facilities delivered with precision and efficiency.",
    features: [
      "Mechanical Installation",
      "Equipment Setup",
      "Industrial Systems",
      "Maintenance",
      "Testing",
      "Optimization",
    ],
  },
  {
    id: 4,
    name: "Fire Alarm & Fire Fighting",
    icon: <PiFireFill className="w-8 h-8" />,
    description:
      "Advanced fire protection systems engineered to safeguard people, infrastructure, and assets through reliable detection and response systems.",
    features: [
      "Fire Alarm Systems",
      "Fire Fighting Systems",
      "Emergency Systems",
      "Detection Devices",
      "Safety Testing",
      "Compliance Certification",
    ],
  },
  {
    id: 5,
    name: "CCTV & Security Systems",
    icon: <PiCamera className="w-8 h-8" />,
    description:
      "Intelligent surveillance and security solutions that provide real-time monitoring, protection, and control for facilities.",
    features: [
      "CCTV Installation",
      "Access Control",
      "Intrusion Detection",
      "Monitoring Systems",
      "Voice Evacuation",
      "Security Integration",
    ],
  },
  {
    id: 6,
    name: "Air Conditioning Systems",
    icon: <PiFanFill className="w-8 h-8" />,
    description:
      "Energy-efficient HVAC systems engineered for optimal climate control, operational efficiency, and long-term reliability.",
    features: [
      "Chiller Installation",
      "Ventilation Systems",
      "Cooling Solutions",
      "Heating Systems",
      "Duct Installation",
      "Maintenance",
    ],
  },
  {
    id: 7,
    name: "Building Management System (BMS)",
    icon: <PiCpuFill className="w-8 h-8" />,
    description:
      "Smart automation systems that monitor and control building operations, improving energy efficiency, safety, and facility performance.",
    features: [
      "Energy Monitoring",
      "Automation Controls",
      "System Integration",
      "Remote Monitoring",
      "Performance Optimization",
      "Alerts & Diagnostics",
    ],
  },
  {
    id: 8,
    name: "IP Network Solutions",
    icon: <PiWifiHighFill className="w-8 h-8" />,
    description:
      "Reliable networking infrastructure designed for speed, scalability, and secure connectivity across enterprise environments.",
    features: [
      "Fiber Cabling",
      "Copper Cabling",
      "IP Networks",
      "IP Storage",
      "Wi-Fi Systems",
      "Telephony Systems",
    ],
  },
  {
    id: 9,
    name: "Automation Solutions",
    icon: <PiRobotFill className="w-8 h-8" />,
    description:
      "Intelligent automation systems that enhance operational efficiency, reduce energy use, and streamline building control.",
    features: [
      "Home Automation",
      "Lighting Control",
      "Guest Room Systems",
      "Integrated Controls",
      "Smart Monitoring",
      "System Optimization",
    ],
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section
      className="py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden"
      id="services"
    >
      {/* Animated background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/3 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <Pretitle text="Our Services" center />

          <h2 className="h2 mb-4 md:mb-6">Solutions We Provide</h2>

          <p className="text-secondary leading-relaxed text-base md:text-lg">
            Offering comprehensive engineering and construction services
            tailored to meet the unique needs of each client with excellence and
            reliability.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2"
    >
      {/* Animated accent border top */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-accent/50 origin-left"
      />

      {/* Animated background glow on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Icon container */}
        <motion.div
          animate={{
            y: isHovered ? -5 : 0,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4 md:mb-6 text-accent transition-all duration-300 group-hover:from-accent/25 group-hover:to-accent/10"
        >
          {service.icon}
        </motion.div>

        {/* Service title */}
        <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4 leading-tight transition-colors duration-300">
          {service.name}
        </h3>

        {/* Service description */}
        <p className="text-secondary text-sm md:text-base leading-relaxed mb-5 md:mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Features list */}
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{
            maxHeight: isHovered ? 1000 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <ul className="space-y-2 pt-2 pb-4 border-t border-border/50">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center text-xs md:text-sm text-secondary gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA indicator */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-accent text-sm font-medium mt-4 md:mt-6 pt-4 border-t border-border/50"
        >
          <span>Learn more</span>
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
