import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type props = {
    img: string
    title: string,
    description: string
    className: string
    handleClick?: () => void
}

const HomeCard = ({ img, title, description, className, handleClick }: props) => {
    return (
        <div onClick={handleClick} className={cn('px-6 py-4 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-lg cursor-pointer', className)}>
            <div className='flex-center glassmorphism size-12 rounded-lg'>
                <Image
                    src={img}
                    alt={title}
                    width={27}
                    height={27}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-xl font-normal'>{description}</p>
            </div>
        </div>
    )
}

export default HomeCard