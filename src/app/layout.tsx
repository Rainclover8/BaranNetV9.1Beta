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
  title: "Baran Çiçek | Portfolio Web Design",
  description: "Baran Çiçek'in portfolio sitesi. Web tasarımı, kullanıcı deneyimi ve dijital çözümler.",
  keywords: "Baran Çiçek, Web Design, UI/UX, Portfolio, Frontend Developer, Next.js",
  openGraph: {
    title: "Baran Çiçek | Portfolio",
    description: "Baran Çiçek'in portfolio sitesi. Web tasarımı ve dijital projeler.",
    url: "https://www.barancicek.space",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Baran Çiçek Portfolio Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BaranCicek",
    title: "Baran Çiçek | Portfolio",
    description: "Baran Çiçek'in portfolio sitesi.",
    images: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HCTF95BKYT"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HCTF95BKYT');
          `}
        </script>

        {/* Favicon */}
        <link rel="icon" href="/ben.png" type="image/x-icon" />

        {/* Meta Tags */}
        <meta name="description" content="Baran Çiçek'in portfolio sitesi. Web tasarımı, kullanıcı deneyimi ve dijital çözümler." />
        <meta name="keywords" content="Baran Çiçek, Web Design, UI/UX, Portfolio, Frontend Developer, Next.js" />

        {/* Open Graph */}
        <meta property="og:title" content="Baran Çiçek | Portfolio" />
        <meta property="og:description" content="Baran Çiçek'in portfolio sitesi. Web tasarımı ve dijital projeler." />
        <meta property="og:url" content="https://www.barancicek.space" />
        <meta property="og:image" content="public/logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BaranCicek" />
        <meta name="twitter:title" content="Baran Çiçek | Portfolio" />
        <meta name="twitter:description" content="Baran Çiçek'in portfolio sitesi." />
        <meta name="twitter:image" content="public/logo.png" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Playwrite+IN:wght@100;400&family=Rubik+Vinyl&family=Sansita+Swashed:wght@300;900&display=swap"
          rel="stylesheet"
        />
        {/* Google ADS */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1464195965921155"
        crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
