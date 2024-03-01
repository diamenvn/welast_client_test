'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/app.scss';
import MainLayout from "@/common/components/layout/index.layout";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const DynamicContextProvider = dynamic(() => import('./_model'), {
    ssr: false,
  });

  return (
    <html lang="en">
      <body id="app" className={inter.className} suppressHydrationWarning={true}>
        <DynamicContextProvider>
          <MainLayout>{children}</MainLayout>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
