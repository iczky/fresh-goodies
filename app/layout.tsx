import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ProductsProvider } from "@/hook/ProductsProvider";
import { ShoppingCartProvider } from "@/hook/ShoopingCartProvider";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <html lang="en" className="font-sf-pro">
          <body className={inter.className}>{children}</body>
        </html>
      </ShoppingCartProvider>
    </ProductsProvider>
  );
}
