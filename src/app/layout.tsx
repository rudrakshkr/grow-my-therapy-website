import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Mulish,
} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const headingFallback = Cormorant_Garamond({
  variable: "--font-heading-fallback",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const beaufortFont = localFont({
  src: "../../public/fonts/Beaufort-Pro-Light.otf",
  variable: "--font-beaufort-loaded",
  weight: "300",
  display: "swap",
});

const bodyFont = Mulish({
  variable: "--font-mulish-web",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title:
    "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Explore adult therapy for anxiety, trauma, panic, and burnout with Dr. Maya Reynolds, PsyD, in Santa Monica and via secure telehealth across California.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingFallback.variable} ${bodyFont.variable} ${beaufortFont.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
