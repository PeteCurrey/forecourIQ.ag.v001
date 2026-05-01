import "./globals.css";
import { Syne, Inter } from "next/font/google";
import { dealerAPI } from "@/lib/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let dealership;
  try {
    dealership = await dealerAPI.getDealership();
  } catch (e) {
    console.error("Failed to fetch dealership info", e);
  }

  const appearance = dealership?.settings?.appearance || {
    primary_color: "#00D4AA",
    secondary_color: "#0F1729",
  };

  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body 
        className="bg-secondary text-white font-sans"
        style={{
          // @ts-ignore
          "--primary-color": appearance.primary_color,
          "--secondary-color": appearance.secondary_color,
        }}
      >
        <Navbar dealership={dealership} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer dealership={dealership} />
      </body>
    </html>
  );
}
