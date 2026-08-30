"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Plus, Package } from "lucide-react";

const products = [
  { code: "ΥΠ-001", name: "Ανάπτυξη ιστοσελίδας", price: 500, vat: 24, type: "Υπηρεσία" },
  { code: "ΥΠ-002", name: "Συμβουλευτική ώρα", price: 80, vat: 24, type: "Υπηρεσία" },
  { code: "ΠΡ-001", name: "Άδεια λογισμικού", price: 120, vat: 24, type: "Προϊόν" },
  { code: "ΥΠ-003", name: "Συντήρηση μηνιαία", price: 150, vat: 24, type: "Υπηρεσία" },
];

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Προϊόντα & Υπηρεσίες</h1>
          <p className="text-sm text-slate-400">Κατάλογος με κωδικούς και τιμές</p>
        </div>
        <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400">
          <Plus className="mr-2 h-4 w-4" />
          Νέο είδος
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.code} className="border-slate-800 bg-slate-950">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                  <Package className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <p className="text-xs text-slate-500">{p.code} · {p.type}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <span className="text-lg font-bold text-white">{formatCurrency(p.price)}</span>
                <span className="text-sm text-slate-400">ΦΠΑ {p.vat}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
