import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import MobileNav from "@/components/nav/MobileNav";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Bytes",
  description: "Notes for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto lg:pb-10 lg:pt-1 space-y-10 p-5 lg:p-0">
            <Navbar/>
            {children}
            <Analytics />
          </main>
          <MobileNav />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
