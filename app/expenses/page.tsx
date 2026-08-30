"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Plus, Search, Receipt } from "lucide-react";

const expenses = [
  { id: "ΕΞ-0148", description: "Ενοίκιο γραφείου Αύγουστος", amount: 850, date: "01/08/2026", category: "Ενοίκιο", source: "ΑΑΔΕ" },
  { id: "ΕΞ-0147", description: "Λογισμικά SaaS", amount: 129.9, date: "28/07/2026", category: "Λογισμικό", source: "Πρόχειρο" },
  { id: "ΕΞ-0146", description: "Καύσιμα", amount: 78.4, date: "25/07/2026", category: "Μετακινήσεις", source: "ΑΑΔΕ" },
  { id: "ΕΞ-0145", description: "Προμήθειες υλικών", amount: 420, date: "22/07/2026", category: "Προμήθειες", source: "ΑΑΔΕ" },
];

export default function ExpensesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Έξοδα</h1>
          <p className="text-sm text-slate-400">Εισερχόμενα παραστατικά & δαπάνες</p>
        </div>
        <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400">
          <Plus className="mr-2 h-4 w-4" />
          Νέο έξοδο
        </Button>
      </div>

      <Card className="border-slate-800 bg-slate-950">
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-left text-slate-400">
                <th className="px-6 py-4 font-medium">Περιγραφή</th>
                <th className="px-6 py-4 font-medium">Κατηγορία</th>
                <th className="px-6 py-4 font-medium">Ημ/νία</th>
                <th className="px-6 py-4 font-medium">Ποσό</th>
                <th className="px-6 py-4 font-medium">Πηγή</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((e) => (
                <tr key={e.id} className="border-b border-slate-800/50 hover:bg-slate-900/50">
                  <td className="px-6 py-4 text-white flex items-center gap-2">
                    <Receipt className="h-4 w-4 text-rose-400" />
                    {e.description}
                  </td>
                  <td className="px-6 py-4 text-slate-300">{e.category}</td>
                  <td className="px-6 py-4 text-slate-400">{e.date}</td>
                  <td className="px-6 py-4 font-medium text-white">{formatCurrency(e.amount)}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      e.source === "ΑΑΔΕ" ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-700 text-slate-300"
                    }`}>
                      {e.source}
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
