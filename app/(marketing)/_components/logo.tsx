import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const font = Poppins ({
    subsets: ["latin"],
    weight: ["400", "600"]
});

export const Logo = () => {
    return (
        <div className='hidden md:flex items-center gap-x-2'>
            <Link href="/">
            <Image 
                src="/logo.svg"
                height="120"
                width="120"
                alt="Logo"
                className='dark:hidden'
            />
            </Link>
            <Link href="/">
            <Image 
                src="/logo-dark.svg"
                height="120"
                width="120"
                alt="Logo"
                className='hidden dark:block'
            />
            </Link>
        </div>
    )
}