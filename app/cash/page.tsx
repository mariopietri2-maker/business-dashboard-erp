"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Wallet } from "lucide-react";

export default function CashPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Ταμείο</h1>
      <p className="text-sm text-slate-400">Ροή μετρητών & τραπεζικοί λογαριασμοί</p>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-slate-800 bg-slate-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Υπόλοιπο ταμείου</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{formatCurrency(12450.80)}</div>
          </CardContent>
        </Card>
        <Card className="border-slate-800 bg-slate-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Τραπεζικός λογαριασμός</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{formatCurrency(48230.15)}</div>
          </CardContent>
        </Card>
        <Card className="border-slate-800 bg-slate-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Εισερχόμενες (μήνα)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">{formatCurrency(18720.00)}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-950">
        <CardContent className="p-8 text-center text-slate-400">
          <Wallet className="mx-auto h-12 w-12 mb-4 opacity-50" />
          <p>Σύντομα: πλήρης ροή ταμείου, συμφιλίωση τραπεζών & IRIS πληρωμές</p>
        </CardContent>
      </Card>
    </div>
  );
}
