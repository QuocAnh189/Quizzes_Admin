"use client";

// import { useEffect, useState } from "react";

import Providers from "src/components/layout/providers";
import { Toaster } from "src/components/ui/toaster";
import "@uploadthing/react/styles.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import { getServerSession } from "next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Next Shadcn",
//   description: "Basic dashboard with Next.js and Shadcn",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [session, setSession] = useState<any>();
  // useEffect(() => {
  //   const getServer = async () => {
  //     const res = await getServerSession();
  //     setSession(res);
  //   };
  //   getServer();
  // }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-hidden`}>
        <QueryClientProvider client={client}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Providers session={null}>
            <Toaster />
            {children}
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
