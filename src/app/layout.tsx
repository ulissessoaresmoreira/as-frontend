import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "Amigo Secreto"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body
        className={"bg-gray-950 text-gray-100"}
      >
        {children}
      </body>
    </html>
  );
}
