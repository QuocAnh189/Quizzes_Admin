"use client";

import Header from "src/components/layout/header";
import Sidebar from "src/components/layout/sidebar";
// import type { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Next Shadcn Dashboard Starter",
//   description: "Basic dashboard with Next.js and Shadcn",
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [left, setLeft] = useState<boolean>(true);
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        {left && <Sidebar className="w-1/6 hidden md:block" side={left} onChange={()=>setLeft(!left)} />}
        <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto ">
          {children}
        </main>
        {!left && <Sidebar className="w-1/6 hidden md:block" side={left} onChange={()=>setLeft(!left)}/>}
      </div>
    </>
  );
}
