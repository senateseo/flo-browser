"use client";
import {useConvexAuth} from 'convex/react';
import { ModeToggle } from "../../../components/mode-toggle";
import { useScrollTop } from "../../../hooks/use-scroll-top";
import { cn } from "../../../lib/utils";
import { Logo } from "./logo";
import { SignInButton, UserButton} from '@clerk/clerk-react';
import { Spinner } from '../../../components/spinner';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    return (
    <div className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
    )}>
        <Logo />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
            {isLoading && (
               <Spinner />
            )}
            {
                !isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm">
                            Start to create FLO
                            </Button>
                        </SignInButton>
                    </>
                )
            }
            {isAuthenticated && !isLoading && (
                <>
                    <Button variant="ghost" size="sm">
                        <Link href="/documents">
                            New FLO
                            
                        </Link>
                        </Button>
                        <UserButton 
                            afterSignOutUrl="/"
                        />
                   
                </>
            )}
            <ModeToggle />
        </div>
    </div>
    );
}
 
export default Navbar;