import type { Metadata } from "next";
import { Rye, Playfair_Display_SC, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rye-var",
  display: "swap",
});

const playfair = Playfair_Display_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair-var",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Post Bar & Grill | Morgan, UT",
  description:
    "Good Friends, Good Food, Good Times. Morgan Utah's favorite bar and grill. Great burgers, cold drinks, and live events. Come as you are.",
  keywords: "bar grill Morgan Utah, burgers, drinks, live events, The Post",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rye.variable} ${playfair.variable} ${lato.variable}`}
    >
      <body className="bg-post-dark text-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
