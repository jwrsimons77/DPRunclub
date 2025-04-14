import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Dark Peak Run Club | Trail Running in Glossop & Peak District",
  description:
    "Join the Dark Peak Run Club – a community of runners exploring the trails of the Peak District every week. Based in Glossop, we welcome runners from Manchester and beyond.",
  keywords: [
    "trail running",
    "running club",
    "Peak District",
    "Glossop running",
    "Dark Peak",
    "run club",
    "coffee and running",
    "Manchester trail running",
    "Kinder Scout runs",
    "Mam Tor runs",
  ],
  authors: [{ name: "James Simons", url: "https://darkpeakrunclub.netlify.app" }],
  creator: "James Simons",
  metadataBase: new URL("https://darkpeakrunclub.netlify.app"),
  openGraph: {
    title: "Dark Peak Run Club | Trail Running in the Peak District",
    description: "Run wild with us through the hills of the Peak District. Coffee and community included.",
    url: "https://darkpeakrunclub.netlify.app",
    siteName: "Dark Peak Run Club",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Dark Peak Run Club Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Peak Run Club",
    description: "Join our retro-fresh trail running community.",
    images: ["/banner.jpg"],
    creator: "@darkpeakrunclub",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Floating Our Story nav link top right */}
        <div className="absolute top-6 right-6 z-50">
          <Link href="/our-story" className="text-white text-sm font-medium hover:underline">
            Our Story
          </Link>
        </div>

        {/* Site content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
