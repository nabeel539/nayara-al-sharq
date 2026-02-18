import React from 'react'
import Link from 'next/link';

import { RiFacebookFill, RiYoutubeFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri'
import { icons } from 'lucide-react';

const socials = [{ icon: <RiFacebookFill />, path: "" }, { icon: <RiInstagramFill />, path: "" }, { icon: <RiYoutubeFill />, path: "" }, { icon: <RiTwitterFill />, path: "" }];


const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {socials.map((item, index) => (
                <Link href={item.path} key={index} className={`${iconStyles}`}>
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}

export default Socials
