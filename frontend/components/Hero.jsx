import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className='h-[70vh] bg-hero bg-cover bg-no-repeat bg-center relative'>
            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70'></div>
            <div className='container mx-auto h-full flex items-center'>
                <div className='z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col xl:items-start max-w-[608px]'>
                    <h1 className='h1 text-white mb-4'>
                        <span className='text-accent'>Building</span> robust lasting solutions
                    </h1>
                    <p className='mb-9'>
                        From concept to completion, we ensure every detail is optimized for strength and endurance, creating solutions that inspire confidence and stand firm for years.
                    </p>
                    {/* button */}
                    <div>
                        <Button text="See our work" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
