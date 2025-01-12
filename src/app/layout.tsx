import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baran Çiçek",
  description: "Portfolio web design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}>
    
    <header>
      <link rel="icon" href="/logo.png" type="image/x-icon" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Playwrite+IN:wght@100;400&family=Rubik+Vinyl&family=Sansita+Swashed:wght@300;900&display=swap" rel="stylesheet"/>

    </header>
    {children}
  </body>
</html>

  );
}
