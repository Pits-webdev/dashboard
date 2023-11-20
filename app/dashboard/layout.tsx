import SideNav from "@/components/dashboard/SideNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-[calc(100vh-7vh)] flex gap-8 px-4">
      <div className="w-64 ">
        <SideNav />
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
