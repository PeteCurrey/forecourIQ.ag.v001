import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import { GSAPProvider } from "@/components/providers/GSAPProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ForecourIQ | The Unfair Advantage for Independent Dealers",
  description: "UK SaaS platform for independent car dealers combining a custom dealer website, a cloud DMS/CRM, and an AI-powered Buying Command Centre.",
  metadataBase: new URL("https://forecouriq.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        <GSAPProvider>
          <LenisProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </GSAPProvider>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ForecourIQ",
              "url": "https://forecouriq.com",
              "logo": "https://forecouriq.com/logo.png",
              "sameAs": [
                "https://twitter.com/forecouriq",
                "https://linkedin.com/company/forecouriq"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
