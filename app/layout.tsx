import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Nav from "@/components/Nav";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Truecaller for Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="grid">
            <div className="h-24 w-full bg-blue-500 row-span-full col-span-full"></div>
            <div className="h-screen w-full row-span-full col-span-full py-8 px-48">
              <div className="h-full bg-white rounded-xl shadow-lg p-3 flex">
                <aside className="bg-custom-fill-1 w-24 rounded-md">
                  <Nav />
                </aside>

                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
