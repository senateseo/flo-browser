"use client";

import { MenuIcon } from "lucide-react";
import { ElementRef, useRef, useState } from "react";


import { useMediaQuery } from "usehooks-ts";
import { useParams } from "next/navigation";
import { cn } from "../../lib/utils";
import Navbar from "./_components/navbar";


const PublicLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {

    const params = useParams();

    const [isResetting, setIsResetting] = useState(false);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    return ( 
        <div className="h-full dark:bg-[#1F1F1F">
            <div
            ref={navbarRef}
            className={cn(
            "absolute top-0 z-[99999]  w-full",
            isResetting && "transition-all ease-in-out duration-300",
            isMobile && "left-0 w-full",
            )}
        >
        <Navbar />
      </div>
            <main className="flex-1 h-full overflow-y-auto">
            {children}
            </main>
        </div>
    );
}
 
export default PublicLayout;