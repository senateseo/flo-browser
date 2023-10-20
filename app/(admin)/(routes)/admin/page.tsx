"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Home } from "lucide-react";
import { useEffect } from "react";

import { Spinner } from "@/components/spinner";
import DataChart from "@/components/data-charts/data-chart";
import { doughnutChartData, lineChartData } from "@/lib/mockData";

const AdminPage = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/login");
  }

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-8">

        {/* Today Published */}
        <div className="flex justify-between items-center rounded-md p-4 bg-secondary shadow-lg">
          <div className="flex space-x-4">
            <div className="rounded-md p-4">
              <Home />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-2xl">13</span>
              <span className="font-bold text-md text-muted-foreground">
                Today Published
              </span>
            </div>
          </div>

          <div>
            <span className="text-xl font-bold text-green-400">+ 16%</span>
          </div>
        </div>

           {/* Today Published */}
           <div className="flex justify-between items-center rounded-md p-4 bg-secondary shadow-lg">
          <div className="flex space-x-4">
            <div className="rounded-md p-4">
              <Home />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-2xl">13</span>
              <span className="font-bold text-md text-muted-foreground">
                Today Published
              </span>
            </div>
          </div>

          <div>
            <span className="text-xl font-bold text-green-400">+ 16%</span>
          </div>
        </div>


     {/* Today Published */}
     <div className="flex justify-between items-center rounded-md p-4 bg-secondary shadow-lg">
          <div className="flex space-x-4">
            <div className="rounded-md p-4">
              <Home />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-2xl">13</span>
              <span className="font-bold text-md text-muted-foreground">
                Today Published
              </span>
            </div>
          </div>

          <div>
            <span className="text-xl font-bold text-green-400">+ 16%</span>
          </div>
        </div>


     {/* Today Published */}
     <div className="flex justify-between items-center rounded-md p-4 bg-secondary shadow-lg">
          <div className="flex space-x-4">
            <div className="rounded-md p-4">
              <Home />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-2xl">13</span>
              <span className="font-bold text-md text-muted-foreground">
                Today Published
              </span>
            </div>
          </div>

          <div>
            <span className="text-xl font-bold text-green-400">+ 16%</span>
          </div>
        </div>


        


      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-between bg-secondary p-4 rounded-md shadow-lg">
       
          {/* Chart */}
          <DataChart type={"line"} data={lineChartData} />
          <span className="font-bold text-md text-muted-foreground">
                Today Published
            </span>
        </div>
        <div className="flex items-center justify-center bg-secondary p-4 rounded-md shadow-lg">
          {/* Chart */}
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
