"use client";

import { GridList } from "./_components/grid-list";
import { File, Search } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/use-search";

const ExplorePage = () => {
  const search = useSearch();

  const documents = useQuery(api.documents.getExploreSearch);

  return (
    <div>
      <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-16 flex-1 px-6 pb-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Explore your FLOs
          </h1>
          <div className="flex gap-x-4">
            <Input
              className="cursor-pointer"
              type="text"
              placeholder="Search..."
              onClick={search.onOpen}
            />
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
        <GridList itemList={documents} />
      </div>
    </div>
  );
};

export default ExplorePage;
