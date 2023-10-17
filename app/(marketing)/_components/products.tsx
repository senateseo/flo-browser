"use client";

import { ArrowRight, Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Spinner } from "../../../components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Products = () => {


  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl sm:text-5xl md:text-5xl font-semibold">
        Download FLO Browser 
      </h1>
      <h3 className="text-base sm:text-sl md:text-xl font-medium ">
      The FLO Browser is an open platform based on Chromium. With the FLO Browser, you can install and use your favorite FLOs
      </h3>

        <div className="space-x-4">
          <Button >
            Download for MacOS
          </Button>
          
            <Button>
            Download for Windows
            </Button>
          
        </div>
    </div>
  );
};
