import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "@/app/components/nav";
import {ThemeProvider} from "@/app/components/theme-switch";
import Footer from "@/app/components/footer";
import {metaData} from "@/app/config";

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
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/icon.ico",
  },
};


const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={cx(geistSans.variable, geistMono.variable)}>
    <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
        <Navbar/>
        {children}
        <Footer/>
      </main>
    </ThemeProvider>
    </body>
    </html>
  );
}
