import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";


const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shivalik Furniture - Premium Furniture Solutions",
  description:
    "Premium furniture manufacturing and design solutions by Shivalik Furniture. Discover our spaces, studio, and manufacturing excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
