'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
    const pathname = usePathname();
    const menu = sidebarLinks.map(link => {
        const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

        return <SheetClose asChild key={link.route}>
            <Link href={link.route}
                className={cn(
                    'flex gap-4 items-center p-4 rounded-lg justify-start ',
                    {
                        'bg-blue-1': isActive,
                    }
                )}
            >
                <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={20}
                    height={20}
                />
                <p className="font-semibold">
                    {link.label}
                </p>
            </Link>
        </SheetClose>
    })
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src='/icons/hamburger.svg'
                        alt="Menu"
                        width={32}
                        height={32}
                        className="cursor-pointer sm:hidden"
                    />
                </SheetTrigger>
                <SheetContent side='left' className="bg-dark-1 border-none">
                    <Link href='/' className='flex items-center gap-1 flex-1'>
                        <Image
                            src='/icons/logo.svg'
                            alt='Home'
                            width={32}
                            height={32}
                            className='max-sm:size-10'
                        />
                        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Zoom Clone</p>
                    </Link>
                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex flex-col h-full gap-6 pt-16 text-white">
                                {menu}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav