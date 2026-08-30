"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Ρυθμίσεις</h1>
      <p className="text-sm text-slate-400">Εταιρικά στοιχεία, σειρές, προεπιλογές & σύνδεση ΑΑΔΕ</p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-slate-800 bg-slate-950">
          <CardHeader>
            <CardTitle className="text-base text-white">Στοιχεία επιχείρησης</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Επωνυμία</span>
              <span className="text-white">Παράδειγμα ΕΠΕ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">ΑΦΜ</span>
              <span className="text-white">999999999</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">ΔΟΥ</span>
              <span className="text-white">Α΄ Αθηνών</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-950">
          <CardHeader>
            <CardTitle className="text-base text-white">Σύνδεση ΑΑΔΕ / myDATA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="text-sm text-emerald-400">Συνδεδεμένο</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Τα παραστατικά αποστέλλονται αυτόματα και λαμβάνουν MARK.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
