import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: "kiros.gr – Διαχείριση Επιχείρησης",
  description:
    "Όλη η δύναμη ενός ERP. Χωρίς την πολυπλοκότητά του. Τιμολόγηση και myDATA για ελληνικές επιχειρήσεις.",
  openGraph: {
    title: "kiros.gr – Διαχείριση Επιχείρησης",
    description: "Όλη η δύναμη ενός ERP. Χωρίς την πολυπλοκότητά του.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className="dark">
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
