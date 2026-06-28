import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Siddique — Backend & DevOps Software Engineer",
  description:
    "Portfolio of Muhammad Siddique — Full-Stack, Backend & DevOps Software Engineer specializing in Go, React, Kubernetes, and real-time systems.",
  keywords: [
    "Muhammad Siddique",
    "Software Engineer",
    "Backend Developer",
    "DevOps",
    "Golang",
    "Kubernetes",
    "Full-Stack",
  ],
  authors: [{ name: "Muhammad Siddique" }],
  openGraph: {
    title: "Muhammad Siddique — Backend & DevOps Software Engineer",
    description:
      "Full-Stack | Backend | DevOps Engineer building high-performance APIs and containerized deployments.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Siddique — Backend & DevOps Software Engineer",
    description:
      "Full-Stack | Backend | DevOps Engineer building high-performance APIs and containerized deployments.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
