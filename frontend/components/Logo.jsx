import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Logo = () => {
    return (
        // <Link href="/">
        //     <Image src='/assets/logo.png' width={230} height={48} alt='logo-nayara-al-sharq' className='object-contain' />
        // </Link>
        <Link href="/" className="flex items-center">
            <Image
                src="/assets/nayara-logo.jpg"
                width={200}
                height={40}
                alt="Nayara Al Sharq"
                className="max-h-[50px] w-auto object-contain"
                priority
            />
        </Link>

    )
}

export default Logo
