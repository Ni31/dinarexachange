import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dinar Exchange Australia | Buy Iraqi Dinar & Zimbabwe Dollar | Authentic Currency",
  description: "Australia's most trusted currency exchange platform. Buy authentic Iraqi Dinar and Zimbabwe Dollar banknotes with certificates of authenticity. Secure delivery nationwide.",
  keywords: "Iraqi Dinar, Zimbabwe Dollar, currency exchange, authentic banknotes, Australia, buy dinar, currency investment, collectible currency",
  authors: [{ name: "Dinar Exchange Australia" }],
  creator: "Dinar Exchange Australia",
  publisher: "Dinar Exchange Australia",
  robots: "index, follow",
  openGraph: {
    title: "Dinar Exchange Australia | Authentic Currency Exchange",
    description: "Buy authentic Iraqi Dinar and Zimbabwe Dollar banknotes with certificates of authenticity. Australia's most trusted currency exchange platform.",
    url: "https://dinarexchange.com.au",
    siteName: "Dinar Exchange Australia",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinar Exchange Australia | Authentic Currency Exchange",
    description: "Buy authentic Iraqi Dinar and Zimbabwe Dollar banknotes with certificates of authenticity.",
    creator: "@dinarexchangeau",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
