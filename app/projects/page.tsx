"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { FolderKanban } from "lucide-react";

const projects = [
  { name: "Website Redesign – ΧΥΖ ΑΕ", revenue: 4500, cost: 1200, status: "Ολοκληρώθηκε" },
  { name: "Εφαρμογή CRM – Νικολάου", revenue: 8200, cost: 3100, status: "Σε εξέλιξη" },
  { name: "Συμβουλευτική Q3", revenue: 3600, cost: 400, status: "Σε εξέλιξη" },
];

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Έργα</h1>
      <p className="text-sm text-slate-400">Έσοδα & κόστος ανά έργο</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.name} className="border-slate-800 bg-slate-950">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-white flex items-center gap-2">
                <FolderKanban className="h-4 w-4 text-amber-400" />
                {p.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Έσοδα</span>
                  <span className="text-emerald-400">{formatCurrency(p.revenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Κόστος</span>
                  <span className="text-rose-400">{formatCurrency(p.cost)}</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-2">
                  <span className="text-slate-400">Κέρδος</span>
                  <span className="font-semibold text-white">{formatCurrency(p.revenue - p.cost)}</span>
                </div>
                <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                  p.status === "Ολοκληρώθηκε" ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"
                }`}>
                  {p.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
