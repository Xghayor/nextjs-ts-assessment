import type { Metadata } from "next";
import "./ui/globals.css";
import { monumentRegular, satoshiBold, satoshiMedium, satoshiRegular } from './ui/fonts'

export const metadata: Metadata = {
  title: "Creon Pass",
  description: "Tokenization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${monumentRegular.className} ${satoshiBold.className} ${satoshiMedium.className} ${satoshiRegular.className}`}>{children}</body>
      </html>
  );
}