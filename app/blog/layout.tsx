import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealer Intelligence Blog | ForecourIQ",
  description: "Market insights, dealer success stories, and the latest in UK automotive retail tech.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
