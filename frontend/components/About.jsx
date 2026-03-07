// import React from 'react'
// import Pretitle from './Pretitle'
// import Image from 'next/image'

// const About = () => {
//     return (
//         <div className='pt-16 xl:pt-32' id='about'>
//             <div className='container mx-auto'>
//                 <div className='flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center'>
//                     {/* text */}
//                     <div className='flex-1'>
//                         {/* Pretitle */}
//                         <div className='max-w-[540px]'>
//                             <Pretitle text="About us" />
//                             <h2 className='h2 mb-6'>Focus On Excellence In Every Project</h2>
//                             <p className="mb-11">
//                                 Our unwavering commitment to excellence drives every project we undertake. From concept to completion, we meticulously craft solutions that embody quality, precision and innovation.
//                             </p>
//                             <div className='w-max flex flex-col text-right mb-10'>
//                                 <Image src='/assets/img/about/signature.svg' width={154}
//                                     height={38} alt='' />
//                                 <p>Company CEO</p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* img */}
//                     <div className='flex-1 xl:flex xl:justify-center'>
//                         <div className='xl:w-[444px] xl:h-[493px] relative'>
//                             <div className='hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10'></div>
//                             <Image src='/assets/img/about/img.jpg' width={444} height={493} alt='about-image' className='object-cover' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About
import React from "react";
import Pretitle from "./Pretitle";
import Image from "next/image";

const About = () => {
  return (
    <section className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-0">
          {/* TEXT */}
          <div className="flex-1 flex justify-center xl:justify-start">
            <div className="max-w-[540px] text-center xl:text-justify">
              <Pretitle text="About us" center />

              <h2 className="h2 mb-6">Focus On Excellence In Every Project</h2>

              <p className="mb-6">
                Nayara Al Sharq is a multidisciplinary contracting company
                specializing in manpower support services across administration,
                civil, mechanical, electrical instrumentation, HSE, and
                warehousing operations.
              </p>

              <p className="mb-11 ">
                From humble beginnings in the 2010s, the company has grown into
                a trusted industry partner delivering residential, commercial,
                and industrial projects. With a strong focus on precision,
                quality, and expertise, we consistently execute solutions that
                meet client expectations and industry standards.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[444px] aspect-[4/5] xl:h-[493px]">
              {/* Accent background block */}
              <div className="hidden xl:block absolute -top-4 -left-4 w-full h-full bg-accent -z-10"></div>

              <Image
                src="/assets/img/about/img.jpg"
                fill
                sizes="(max-width: 1280px) 100vw, 444px"
                alt="about-image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
