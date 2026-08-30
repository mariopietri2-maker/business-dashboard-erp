import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: "kiros.gr – Διαχείριση Επιχείρησης",
  description: "Όλη η δύναμη ενός ERP. Χωρίς την πολυπλοκότητά του.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className="dark">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-slate-900 pt-14 md:pt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
