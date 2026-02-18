import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Nayara Construction | Trusted Industrial & Commercial Engineering Experts",
  description:
    "Nayara Construction delivers reliable civil, mechanical, electrical, HVAC, and infrastructure solutions across industrial and commercial projects with a focus on quality, safety, and precision.",
  keywords: [
    "Construction Company",
    "Civil Engineering",
    "Mechanical Services",
    "Electrical Works",
    "HVAC Installation",
    "Industrial Construction",
    "Infrastructure Projects",
    "Engineering Solutions",
  ],
  authors: [{ name: "Nayara Construction" }],
  creator: "Nayara Construction",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Nayara Construction",
    description:
      "Professional construction and engineering solutions for industrial and commercial projects.",
    url: "https://yourdomain.com",
    siteName: "Nayara Construction",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
