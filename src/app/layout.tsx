"use client";

import Providers from "src/components/layout/providers";
import { Provider } from "react-redux";
import store from "src/redux/store";
import { Toaster } from "src/components/ui/toaster";
import "@uploadthing/react/styles.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-hidden`}>
        <Providers session={null}>
        <Provider store={store}>
          <Toaster />
          {children}
        </Provider>
        </Providers>
      </body>
    </html>
  );
}
