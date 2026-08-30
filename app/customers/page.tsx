"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Plus, Search, Users } from "lucide-react";

const customers = [
  { name: "ΧΥΖ ΑΕ", afm: "998877665", revenue: 28400, unpaid: 0, invoices: 12 },
  { name: "Παπαδόπουλος ΑΕ", afm: "123456789", revenue: 19200, unpaid: 8200, invoices: 8 },
  { name: "Νικολάου ΟΕ", afm: "987654321", revenue: 15600, unpaid: 0, invoices: 6 },
  { name: "Μαρκάκης ΙΚΕ", afm: "456789123", revenue: 12100, unpaid: 3100, invoices: 5 },
  { name: "Κωνσταντίνου ΕΕ", afm: "321654987", revenue: 9800, unpaid: 0, invoices: 4 },
];

export default function CustomersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Πελάτες</h1>
          <p className="text-sm text-slate-400">Καρτέλες πελατών & ιστορικό</p>
        </div>
        <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400">
          <Plus className="mr-2 h-4 w-4" />
          Νέος πελάτης
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          placeholder="Αναζήτηση ονόματος ή ΑΦΜ..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customers.map((c) => (
          <Card key={c.afm} className="border-slate-800 bg-slate-950 hover:border-amber-500/30 transition-colors cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
                    <Users className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{c.name}</h3>
                    <p className="text-xs text-slate-500">ΑΦΜ: {c.afm}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-slate-500">Τζίρος</p>
                  <p className="text-sm font-medium text-white">{formatCurrency(c.revenue)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Ανεξόφλητα</p>
                  <p className={`text-sm font-medium ${c.unpaid > 0 ? "text-orange-400" : "text-emerald-400"}`}>
                    {formatCurrency(c.unpaid)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Τιμολόγια</p>
                  <p className="text-sm font-medium text-white">{c.invoices}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
