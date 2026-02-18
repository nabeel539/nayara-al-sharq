"use client"
import React from 'react'

import {
    PiWallFill, PiHammerFill,
    PiLightbulbFilamentFill,
    PiLightningFill,
    PiFanFill,
    PiShieldCheckFill,
    PiCpuFill,
} from "react-icons/pi";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Pretitle from './Pretitle';


const serviceData = [
    {
        name: "construction",
        icon: <PiWallFill />,
        title: "Construction Services",
        description:
            "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
        serviceList: [
            "Residential Builds",
            "Structural Design",
            "Site Prep",
            "Concrete Work",
            "Framing & Roofing",
            "Interior Finish",
        ],
        thumbs: [
            { url: "/assets/img/services/thumb-1.jpg" },
            { url: "/assets/img/services/thumb-2.jpg" },
        ],
    },
    {
        name: "restoration",
        icon: <PiHammerFill />,
        title: "Restoration Services",
        description:
            "We restore and reinforce existing structures with expert care, combining modern techniques with industry standards to bring buildings back to life safely and efficiently.",
        serviceList: [
            "Structural Repair",
            "Concrete Restoration",
            "Water Damage Repair",
            "Facade Renewal",
            "Roof Restoration",
            "Interior Refurbishment",
        ],
        thumbs: [
            { url: "/assets/img/services/thumb-1.jpg" },
            { url: "/assets/img/services/thumb-2.jpg" },
        ],
    },
    {
        name: "consulting",
        icon: <PiLightbulbFilamentFill />,
        title: "Engineering Consulting",
        description:
            "Our consulting services guide projects from planning to execution with expert insight, ensuring cost efficiency, structural integrity, and compliance with all safety standards.",
        serviceList: [
            "Project Planning",
            "Feasibility Studies",
            "Cost Estimation",
            "Design Consultation",
            "Risk Assessment",
            "Technical Audits",
        ],
        thumbs: [
            { url: "/assets/img/services/thumb-1.jpg" },
            { url: "/assets/img/services/thumb-2.jpg" },
        ],
    },
    {
        name: "electrical",
        icon: <PiLightningFill />,
        title: "Electrical Systems",
        description:
            "We deliver reliable electrical infrastructure solutions designed for safety, efficiency, and long-term performance across commercial and industrial facilities.",
        serviceList: [
            "Electrical Installation",
            "Power Distribution",
            "Panel Installation",
            "Lighting Systems",
            "Maintenance",
            "Testing & Commissioning",
        ],
        thumbs: [
            { url: "/assets/img/services/thumb-1.jpg" },
            { url: "/assets/img/services/thumb-2.jpg" },
        ],
    },
    {
        name: "hvac",
        icon: <PiFanFill />,
        title: "HVAC Solutions",
        description:
            "Our HVAC systems are engineered for optimal comfort, energy efficiency, and climate control using advanced technologies and precise installation standards.",
        serviceList: [
            "Chiller Installation",
            "Ventilation Systems",
            "Cooling Solutions",
            "Heating Systems",
            "Duct Fabrication",
            "Maintenance Services",
        ],
        thumbs: [
            { url: "/assets/img/services/thumb-1.jpg" },
            { url: "/assets/img/services/thumb-2.jpg" },
        ],
    },
    {
        name: "security",
        icon: <PiShieldCheckFill />,
        title: "Security Systems",
        description:
            "We implement advanced security and surveillance systems designed to protect facilities, assets, and personnel with smart monitoring technologies.",
        serviceList: [
            "CCTV Installation",
            "Access Control",
            "Intrusion Detection",
            "Fire Alarm Systems",
            "Voice Evacuation",
            "Monitoring Systems",
        ],
        thumbs: [
            { url: "/assets/img/services/thumb-1.jpg" },
            { url: "/assets/img/services/thumb-2.jpg" },
        ],
    },
    {
        name: "bms",
        icon: <PiCpuFill />,
        title: "Building Management Systems",
        description:
            "Our smart BMS solutions automate and monitor building operations, optimizing energy use, improving efficiency, and ensuring seamless facility management.",
        serviceList: [
            "Energy Monitoring",
            "Automation Controls",
            "System Integration",
            "Performance Optimization",
            "Remote Monitoring",
            "Maintenance Alerts",
        ],
        thumbs: [
            { url: "/assets/img/services/thumb-1.jpg" },
            { url: "/assets/img/services/thumb-2.jpg" },
        ],
    },

];


const Services = () => {
    const [activeTab, setActiveTab] = React.useState(serviceData[0].name);
    return (
        <section className='pt-16 xl:pt-32' id='services'>
            <div className='container mx-auto'>

                <Pretitle text='Our Services' center />

                <div>
                    <h2 className='h2 mb-3 text-center'>Solutions We Provide</h2>
                    <p className='mb-11 max-w-[480px] mx-auto text-center'>
                        Offering comprehensive engineering and construction services tailored to meet the unique needs of each client.
                    </p>
                </div>

                {/* TABS */}
                <Tabs
                    defaultValue={serviceData[0].name}
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >

                    {/* TAB LIST */}
                    <TabsList
                        className="
          relative z-10
          w-full p-0 bg-transparent
          mb-[40px] sm:mb-[50px]

          grid grid-cols-4 gap-3
          sm:flex sm:flex-wrap sm:justify-center sm:gap-[12px]
        "
                    >
                        {serviceData.map((service) => (
                            <TabsTrigger
                                key={service.name}
                                value={service.name}
                                className="
              flex items-center justify-center
              sm:justify-start
              gap-2 sm:gap-3

              px-0 sm:px-5
              py-1.5 sm:py-3

              bg-[#f4f4f4]
              rounded-none
              border border-transparent

              transition-all duration-200

              data-[state=active]:bg-white
              data-[state=active]:border-primary
              data-[state=active]:shadow-md

              hover:shadow-sm

              w-full sm:w-auto
              text-[11px] sm:text-[12px]
            "
                            >

                                {/* ICON */}
                                <div
                                    className={`w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] flex items-center justify-center rounded-none transition-colors duration-300 ${activeTab === service.name
                                        ? "bg-primary text-white"
                                        : "bg-accent text-black"
                                        }`}
                                >
                                    <div className="text-[16px] sm:text-xl">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* TITLE */}
                                <div className="uppercase font-primary font-semibold tracking-[0.5px] hidden sm:block">
                                    {service.name}
                                </div>

                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* CONTENT PANEL */}
                    <div className="relative z-0 bg-white shadow-custom rounded-none w-full
                      pt-[28px] sm:pt-[30px] md:pt-[40px]
                      px-[20px] sm:px-[30px] md:px-[40px]
                      pb-[20px] sm:pb-[30px] md:pb-[40px]">

                        <AnimatePresence mode="wait">
                            {serviceData.map((service) =>
                                service.name === activeTab ? (
                                    <TabsContent key={service.name} value={service.name} forceMount>

                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -15 }}
                                            transition={{ duration: 0.4 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[30px] md:gap-[40px] items-start"
                                        >

                                            {/* LEFT TEXT */}
                                            <div>
                                                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-[0.5px] mb-4 sm:mb-5 text-primary">
                                                    {service.title}
                                                </h3>

                                                <p className="mb-4 sm:mb-6 text-[13px] sm:text-[14px] text-secondary leading-relaxed">
                                                    {service.description}
                                                </p>

                                                <ul className="space-y-2 sm:space-y-3">
                                                    {service.serviceList.map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -15 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="flex items-center text-[12px] sm:text-[13px]"
                                                        >
                                                            <span className="w-[5px] sm:w-[6px] h-[5px] sm:h-[6px] bg-accent inline-block mr-2 sm:mr-3 flex-shrink-0" />
                                                            {item}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* RIGHT IMAGES */}
                                            <div className="flex gap-3 sm:gap-4">
                                                {service.thumbs.map((img, i) => (
                                                    <motion.img
                                                        key={i}
                                                        src={img.url}
                                                        alt={service.title}
                                                        initial={{ opacity: 0, scale: 1.05 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.15 * i, duration: 0.5 }}
                                                        className="w-1/2 object-cover rounded-none"
                                                    />
                                                ))}
                                            </div>

                                        </motion.div>

                                    </TabsContent>
                                ) : null
                            )}
                        </AnimatePresence>

                    </div>

                </Tabs>
            </div>
        </section>

    )
}

export default Services
