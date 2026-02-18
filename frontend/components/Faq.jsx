import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import FaqItem from "./FaqItem";

const faqItemsData = [
    {
        title: "How long does a construction project usually take?",
        description:
            "Project timelines vary depending on size, complexity, approvals, and site conditions. After assessment, we provide a clear execution schedule.",
    },
    {
        title: "Do I need permits for my project?",
        description:
            "Yes. Most construction projects require permits and approvals. Our team assists in documentation and ensures full regulatory compliance.",
    },
    {
        title: "What industries do you serve?",
        description:
            "We work across residential, commercial, industrial, and infrastructure sectors, delivering tailored engineering and construction solutions.",
    },
    {
        title: "Do you provide design and planning services?",
        description:
            "Yes. We offer complete pre-construction support including feasibility studies, design consultation, budgeting, and planning.",
    },
    {
        title: "How do you ensure quality and safety standards?",
        description:
            "We follow strict industry regulations, quality control systems, and safety protocols to guarantee reliable and secure project delivery.",
    },
    {
        title: "Can you handle large-scale projects?",
        description:
            "Absolutely. Our experienced engineers, project managers, and technical teams are equipped to handle projects of all sizes and complexities.",
    },
];

// animation variants for FAQ items
const faqItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.15,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
}

const Faq = () => {
    return (
        <section className="pt-16 xl:pt-32 ">
            <div className="container mx-auto">
                <div className="text-center max-w-[540px] mx-auto xl:mb-20">
                    <Pretitle text="FAQ" center />
                    <h2 className="h2 mb-3">Got Question? We've Got You Covered.</h2>
                    <p className="mb-11 max-w-[480px] mx-auto">
                        Find answers to common questions about our engineering and construction
                        services, project timelines, permits, and more.
                    </p>
                </div>
                <div>
                    <ul className="w-full flex flex-col">
                        {faqItemsData.map((item, index) => (
                            <li key={index} >
                                <FaqItem title={item.title} description={item.description} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Faq;
