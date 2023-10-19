"use client";

import { Button } from "@/components/ui/button";

export const Products = () => {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold">
        Download FLO Browser
      </h1>
      <h3 className="text-base sm:text-sl md:text-xl font-medium ">
        The FLO Browser is an open platform based on Chromium. With the FLO
        Browser, you can install and use your favorite FLOs
      </h3>

      <div className="grid grid-cols-1 sm:flex sm:flex-row items-center justify-center space-y-4 sm:space-x-4 sm:space-y-0 px-10">
        <Button>Download for MacOS</Button>
        <Button>Download for Windows</Button>
      </div>
    </div>
  );
};
