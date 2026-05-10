import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ankitsingh.dev"),
  title: "Ankit Singh — Full Stack Developer & Backend Engineer",
  description:
    "Full Stack Developer specializing in Node.js, NestJS, MERN Stack, REST APIs, authentication systems, scalable backend systems, and AI-integrated applications.",
  keywords: [
    "Ankit Singh",
    "Full Stack Developer",
    "Backend Engineer",
    "Node.js Developer",
    "NestJS",
    "MERN Stack",
    "React Developer",
    "TypeScript",
    "AI Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ankit Singh" }],
  creator: "Ankit Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankitsingh.dev",
    title: "Ankit Singh — Full Stack Developer & Backend Engineer",
    description:
      "Full Stack Developer specializing in Node.js, NestJS, MERN Stack, and AI-integrated applications.",
    siteName: "Ankit Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Singh — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Singh — Full Stack Developer",
    description: "Full Stack Developer specializing in Node.js, NestJS, and MERN Stack.",
    images: ["/og-image.png"],
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
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
