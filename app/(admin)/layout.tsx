"use client";

import { Navigation } from "./_components/navigation";

interface AdminLayoutProps {
    children: React.ReactNode
}

const AdminLayout = ({children} : AdminLayoutProps) => {  
    return (
      <div className="h-full flex dark:bg-[#1F1F1F]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
          {children}
        </main>
      </div>
    );
  
}
 
export default AdminLayout;