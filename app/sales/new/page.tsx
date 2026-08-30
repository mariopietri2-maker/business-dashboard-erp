"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { ArrowLeft, Plus, Trash2, Send } from "lucide-react";
import Link from "next/link";

const VAT_RATES = [0, 6, 13, 24];

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
}

export default function NewInvoicePage() {
  const router = useRouter();
  const [customerName, setCustomerName] = useState("");
  const [customerAfm, setCustomerAfm] = useState("");
  const [docType, setDocType] = useState("2.1");
  const [notes, setNotes] = useState("");
  const [lines, setLines] = useState<LineItem[]>([
    { id: "1", description: "", quantity: 1, unitPrice: 0, vatRate: 24 },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const addLine = () => {
    setLines([
      ...lines,
      {
        id: Date.now().toString(),
        description: "",
        quantity: 1,
        unitPrice: 0,
        vatRate: 24,
      },
    ]);
  };

  const removeLine = (id: string) => {
    if (lines.length === 1) return;
    setLines(lines.filter((l) => l.id !== id));
  };

  const updateLine = (id: string, field: keyof LineItem, value: string | number) => {
    setLines(
      lines.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  };

  const netTotal = lines.reduce(
    (sum, l) => sum + l.quantity * l.unitPrice,
    0
  );
  const vatTotal = lines.reduce(
    (sum, l) => sum + l.quantity * l.unitPrice * (l.vatRate / 100),
    0
  );
  const grandTotal = netTotal + vatTotal;

  const handleSubmit = async (sendToAade: boolean) => {
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSuccess(true);
    setTimeout(() => router.push("/sales"), 1800);
  };

  if (success) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <Card className="border-emerald-500/50 bg-slate-950 max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <Send className="h-8 w-8 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Το παραστατικό εκδόθηκε!</h2>
            <p className="text-slate-400 text-sm">
              MARK: 40000{Math.floor(Math.random() * 1000000000)}
            </p>
            <p className="text-slate-500 text-xs mt-2">Ανακατεύθυνση στις πωλήσεις...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/sales">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Νέο Παραστατικό</h1>
          <p className="text-sm text-slate-400">Συμπληρώστε τα στοιχεία και στείλτε στο myDATA</p>
        </div>
      </div>

      {/* Document Type & Customer */}
      <Card className="border-slate-800 bg-slate-950">
        <CardHeader>
          <CardTitle className="text-base text-white">Στοιχεία παραστατικού</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">Τύπος παραστατικού</label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="1.1">1.1 Τιμολόγιο Πώλησης</option>
                <option value="2.1">2.1 Τιμολόγιο Παροχής Υπηρεσιών</option>
                <option value="9.3">9.3 Δελτίο Αποστολής</option>
                <option value="11.1">11.1 Απόδειξη Λιανικής</option>
                <option value="11.2">11.2 Απόδειξη Παροχής Υπηρεσιών</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">ΑΦΜ Πελάτη</label>
              <input
                type="text"
                value={customerAfm}
                onChange={(e) => setCustomerAfm(e.target.value)}
                placeholder="π.χ. 123456789"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">Επωνυμία Πελάτη</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="π.χ. ΧΥΖ ΑΕ"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Line Items */}
      <Card className="border-slate-800 bg-slate-950">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base text-white">Γραμμές παραστατικού</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={addLine}
            className="border-slate-700 text-slate-300 hover:bg-slate-800"
          >
            <Plus className="mr-1 h-4 w-4" />
            Προσθήκη
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {lines.map((line, idx) => (
            <div
              key={line.id}
              className="grid gap-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4 md:grid-cols-12"
            >
              <div className="md:col-span-5">
                <label className="block text-xs text-slate-500 mb-1">Περιγραφή</label>
                <input
                  type="text"
                  value={line.description}
                  onChange={(e) => updateLine(line.id, "description", e.target.value)}
                  placeholder="Υπηρεσία ή προϊόν"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Ποσότητα</label>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  value={line.quantity}
                  onChange={(e) => updateLine(line.id, "quantity", parseFloat(e.target.value) || 0)}
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">Τιμή μονάδας</label>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  value={line.unitPrice}
                  onChange={(e) => updateLine(line.id, "unitPrice", parseFloat(e.target.value) || 0)}
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-500 mb-1">ΦΠΑ %</label>
                <select
                  value={line.vatRate}
                  onChange={(e) => updateLine(line.id, "vatRate", parseInt(e.target.value))}
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  {VAT_RATES.map((r) => (
                    <option key={r} value={r}>
                      {r}%
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-1 flex items-end justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeLine(line.id)}
                  className="text-slate-500 hover:text-rose-400"
                  disabled={lines.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Totals & Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-slate-800 bg-slate-950">
          <CardContent className="p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Καθαρή αξία</span>
              <span className="text-white">{formatCurrency(netTotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">ΦΠΑ</span>
              <span className="text-white">{formatCurrency(vatTotal)}</span>
            </div>
            <div className="flex justify-between border-t border-slate-800 pt-3 text-lg font-bold">
              <span className="text-white">Σύνολο</span>
              <span className="text-amber-400">{formatCurrency(grandTotal)}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-950">
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">Σημειώσεις</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
                placeholder="Προαιρετικές σημειώσεις..."
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-slate-700 text-slate-300"
                onClick={() => handleSubmit(false)}
                disabled={submitting || !customerName || netTotal === 0}
              >
                Αποθήκευση πρόχειρου
              </Button>
              <Button
                className="flex-1 bg-amber-500 text-slate-950 hover:bg-amber-400"
                onClick={() => handleSubmit(true)}
                disabled={submitting || !customerName || netTotal === 0}
              >
                {submitting ? "Αποστολή..." : "Έκδοση & myDATA"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
