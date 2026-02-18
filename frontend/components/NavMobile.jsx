"use client"
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { RiFacebookFill, RiInstagramFill, RiMenu3Fill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import Socials from './Socials'
import Logo from './Logo'
import { Link as ScrollLink } from 'react-scroll';


const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={() => setIsOpen(true)} className=' bg-primary text-white'>
                <RiMenu3Fill />
            </SheetTrigger>
            <SheetContent position='right' size='full' className='bg-primary'>
                <SheetHeader>
                    <Logo />
                </SheetHeader>
                <div className='flex flex-col items-center justify-center gap-12 mt-20'>
                    {["home", "about", "services", "work", "contact"].map((link, index) => (
                        <ScrollLink key={index} to={link} smooth={true} duration={500} className='text-white text-2xl uppercase font-primary font-medium tracking-[1.2px] cursor-pointer' activeClass='text-secondary' spy={true} onClick={() => setIsOpen(false)}>
                            {link}
                        </ScrollLink>
                    ))}
                </div>

                {/* socials */}
                <div className='absolute bottom-10 w-full flex items-center justify-center gap-8'>
                    <Socials containerStyles='flex item-center gap-8' iconStyles='text-white text-2xl' />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavMobile
