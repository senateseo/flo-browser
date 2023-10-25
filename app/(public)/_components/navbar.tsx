"use client";
import { useQuery } from "convex/react"; 
import { useParams, usePathname } from 'next/navigation';
import { Check, Link2 } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useState } from "react";

import { Logo } from "../../(marketing)/_components/logo";
import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hooks/use-origin";



const Navbar = () => {

    const [copied, setCopied] = useState(false);
    const pathname = usePathname();
    const origin = useOrigin();

    const params = useParams();
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId as Id<"documents">,
    });;

    if(document === undefined){
        return (
            <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center justify-between">
                
            </nav>
        )
    }

    if (document === null){
        return null;
    }

    const onCopy = () => {
        navigator.clipboard.writeText(origin+pathname);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000)
    }

    return(
        <>
            <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
                <div className="flex items-center justify-between w-full">
                    <div>
                    <Logo />
                    </div>
                    
                    <div className="flex items-center gap-x-2">
                        <Button variant={"outline"} onClick={onCopy} disabled={copied}>
                        {copied ? (
                                    <Check className="w-4 h-4"/>
                                ) : (
                                    <Link2  className="w-4 h-4" />
                                )}
                        
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;