"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Plus, Search, FileText } from "lucide-react";

const invoices = [
  { id: "ΤΙΜ-2026-0142", customer: "ΧΥΖ ΑΕ", amount: 1488.0, date: "28/08/2026", status: "Εξοφλημένο", mark: "400001959983757" },
  { id: "ΤΙΜ-2026-0141", customer: "Παπαδόπουλος ΑΕ", amount: 620.0, date: "27/08/2026", status: "Ανεξόφλητο", mark: "400001959983720" },
  { id: "ΤΙΜ-2026-0140", customer: "Νικολάου ΟΕ", amount: 3720.0, date: "25/08/2026", status: "Εξοφλημένο", mark: "400001959983701" },
  { id: "ΤΙΜ-2026-0139", customer: "Μαρκάκης ΙΚΕ", amount: 992.0, date: "22/08/2026", status: "Ανεξόφλητο", mark: "400001959983655" },
  { id: "ΤΙΜ-2026-0138", customer: "Κωνσταντίνου ΕΕ", amount: 2480.0, date: "20/08/2026", status: "Εξοφλημένο", mark: "400001959983612" },
];

export default function SalesPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Πωλήσεις</h1>
          <p className="text-sm text-slate-400">Τιμολόγια & παραστατικά</p>
        </div>
        <Link href="/sales/new">
          <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400 w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Νέο τιμολόγιο
          </Button>
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          placeholder="Αναζήτηση πελάτη, αριθμού, MARK..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
        />
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {invoices.map((inv) => (
          <Card key={inv.id} className="border-slate-800 bg-slate-950">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-amber-400" />
                  <span className="font-medium text-white text-sm">{inv.id}</span>
                </div>
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                    inv.status === "Εξοφλημένο"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {inv.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{inv.customer}</p>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-slate-500">{inv.date}</span>
                <span className="font-semibold text-white">{formatCurrency(inv.amount)}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-slate-600">{inv.mark}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop table */}
      <Card className="border-slate-800 bg-slate-950 hidden md:block">
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-left text-slate-400">
                <th className="px-6 py-4 font-medium">Αριθμός</th>
                <th className="px-6 py-4 font-medium">Πελάτης</th>
                <th className="px-6 py-4 font-medium">Ημ/νία</th>
                <th className="px-6 py-4 font-medium">Ποσό</th>
                <th className="px-6 py-4 font-medium">MARK</th>
                <th className="px-6 py-4 font-medium">Κατάσταση</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b border-slate-800/50 hover:bg-slate-900/50"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-amber-400" />
                      {inv.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{inv.customer}</td>
                  <td className="px-6 py-4 text-slate-400">{inv.date}</td>
                  <td className="px-6 py-4 font-medium text-white">
                    {formatCurrency(inv.amount)}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">
                    {inv.mark}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        inv.status === "Εξοφλημένο"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-orange-500/20 text-orange-400"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
