import { ExlporeSearchCommand } from "../../components/explore-search-command";
import { SearchCommand } from "../../components/search-command";
import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <ExlporeSearchCommand />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
