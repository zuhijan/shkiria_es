import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "@/app/components/nav";
import {ThemeProvider} from "@/app/components/theme-switch";
import Footer from "@/app/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shkiria",
  description: "by Egor Shkiria",
};


const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(geistSans.variable, geistMono.variable)}>
    <head>
      <link
        rel="alternate"
        type="application/atom+xml"
        href="/atom.xml"
        title="Atom Feed"
      />
      <link
        rel="alternate"
        type="application/feed+json"
        href="/feed.json"
        title="JSON Feed"
      />
    </head>
    <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
    </body>
    </html>
  );
}
