import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {

    return (
        <nav className='flex flex-between z-50 w-full fixed bg-dark-1 px-6 py-4 lg:px-10 items-center'>
            <Link href='/' className='flex items-center gap-1 flex-1'>
                <Image
                    src='/icons/logo.svg'
                    alt='Home'
                    width={32}
                    height={32}
                    className='max-sm:size-10'
                />
                <p className='text-[26px] font-extrabold text-white'>Zoom Clone</p>
            </Link>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar