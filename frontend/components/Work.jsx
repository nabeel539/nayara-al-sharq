"use client";

import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
    {
        img: "/assets/img/work/restoration.jpg",
        name: "restoration",
        description: "Professional structural restoration ensuring durability and long-term performance.",
        href: "#",
    },
    {
        img: "/assets/img/work/construction.jpg",
        name: "construction",
        description: "High-quality construction solutions built with precision and modern engineering.",
        href: "#",
    },
    {
        img: "/assets/img/work/consulting.jpg",
        name: "consulting",
        description: "Expert engineering consultation for efficient, compliant and optimized execution.",
        href: "#",
    },
    // renovation.jpg
    {
        img: "/assets/img/work/renovation.jpg",
        name: "renovation",
        description: "Transforming spaces with innovative renovation solutions for modern living.",
        href: "#",
    },
];

const Work = () => {
    return (
        <section className="pt-16 xl:pt-32" id="work">
            <div className="container mx-auto px-4 sm:px-6">
                {/* HEADER */}
                <div className="text-center max-w-[540px] mx-auto mb-12 sm:mb-16 xl:mb-20">
                    <Pretitle text="Our Work" center />
                    <h2 className="h2 mb-3">Discover our Projects</h2>
                    <p className="mb-8 sm:mb-11 max-w-[480px] mx-auto text-[13px] sm:text-[14px]">
                        Explore our recent projects showcasing expertise, precision and commitment
                        to delivering high-quality engineering solutions.
                    </p>
                </div>
            </div>
            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
                {workData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full aspect-square relative overflow-hidden group rounded-lg cursor-pointer"
                    >
                        {/* IMAGE */}
                        <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, (max-width:1280px) 50vw, 25vw"
                            quality={100}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* OVERLAY - Hidden by default, shown on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                            {/* CONTENT BOX */}
                            <div className="w-full p-4 sm:p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <RiCheckboxCircleFill className="text-accent text-sm sm:text-base flex-shrink-0" />
                                            <h4 className="text-white font-primary text-xs sm:text-sm font-semibold tracking-[0.5px] sm:tracking-[1px] uppercase">
                                                {item.name}
                                            </h4>
                                        </div>
                                        <p className="text-white/90 text-[10px] sm:text-[11px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    {/* LINK BUTTON */}
                                    <Link
                                        href={item.href}
                                        className="w-9 h-9 sm:w-10 sm:h-10 bg-accent text-primary text-base sm:text-lg flex justify-center items-center rounded hover:bg-yellow-400 transition-colors duration-300 flex-shrink-0"
                                    >
                                        <RiArrowRightUpLine />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
