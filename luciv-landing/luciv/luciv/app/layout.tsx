import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const title = "Luciv — Content that drives growth";
const description =
  "Luciv creates strategic video content for businesses that want to look as good online as they are in real life.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://lucivcreative.com"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1774, height: 887 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
