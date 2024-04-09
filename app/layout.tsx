import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { GeistSans } from 'geist/font/sans'
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Zaid Blog",
  description: "Blog website for Zaid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-2xl mx-auto px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
