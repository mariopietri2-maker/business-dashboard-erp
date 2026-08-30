import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Bot,
  Shield,
  Zap,
  Users,
  BarChart3,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Βοηθός AI στα ελληνικά",
    desc: "Γράψτε ή υπαγορεύστε μία πρόταση και το τιμολόγιο είναι έτοιμο.",
  },
  {
    icon: Shield,
    title: "Απευθείας myDATA",
    desc: "Κάθε παραστατικό παίρνει MARK σε δευτερόλεπτα. Συμβατό με ΑΑΔΕ.",
  },
  {
    icon: Zap,
    title: "Γρήγορη έκδοση",
    desc: "Από την υπαγόρευση στο myDATA σε λιγότερο από 30 δευτερόλεπτα.",
  },
  {
    icon: Users,
    title: "Πρόσβαση λογιστή",
    desc: "Ο λογιστής σας βλέπει τα δεδομένα και κάνει συμφωνία με το myDATA.",
  },
  {
    icon: BarChart3,
    title: "Στατιστικά σε πραγματικό χρόνο",
    desc: "Έσοδα, έξοδα, ΦΠΑ, ΕΦΚΑ και τεκμήρια σε μία οθόνη.",
  },
  {
    icon: FileText,
    title: "Όλοι οι τύποι παραστατικών",
    desc: "1.1, 2.1, 9.3, 11.1, 11.2 και εισερχόμενα από την ΑΑΔΕ.",
  },
];

const plans = [
  {
    name: "Δωρεάν",
    price: "0€",
    period: "για πάντα",
    features: [
      "Έως 10 παραστατικά / μήνα",
      "Σύνδεση myDATA",
      "Βασικός πίνακας ελέγχου",
      "Πελάτες & προϊόντα",
    ],
    cta: "Ξεκινήστε δωρεάν",
    highlighted: false,
  },
  {
    name: "Επαγγελματικό",
    price: "19€",
    period: "/ μήνα",
    features: [
      "Απεριόριστα παραστατικά",
      "Βοηθός AI",
      "Σάρωση αποδείξεων",
      "Πρόσβαση λογιστή",
      "Υπενθυμίσεις πληρωμών",
      "Προτεραιότητα υποστήριξης",
    ],
    cta: "14 ημέρες δοκιμή",
    highlighted: true,
  },
  {
    name: "Επιχείρηση",
    price: "49€",
    period: "/ μήνα",
    features: [
      "Όλα του Επαγγελματικού",
      "Πολλαπλοί χρήστες",
      "Αποθήκη & δελτία αποστολής",
      "Έργα & κόστος",
      "API πρόσβαση",
      "Προσαρμοσμένες σειρές",
    ],
    cta: "Επικοινωνήστε",
    highlighted: false,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950">
              K
            </div>
            <span className="text-lg font-semibold">kiros.gr</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300">
                Σύνδεση
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400">
                Ξεκινήστε δωρεάν
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
          <Zap className="h-4 w-4" />
          Τιμολόγηση και myDATA για ελληνικές επιχειρήσεις
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Όλη η δύναμη ενός ERP.{" "}
          <span className="text-amber-400">Χωρίς την πολυπλοκότητά του.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Τιμολόγια, δελτία αποστολής, έξοδα, εισπράξεις, ΦΠΑ και ΕΦΚΑ σε μία
          εφαρμογή. Με βοηθό που καταλαβαίνει ελληνικά.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400 px-8">
              Ξεκινήστε δωρεάν →
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 px-8">
              Δείτε το σε 2 λεπτά
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Χωρίς κάρτα · 14 ημέρες πλήρες Επαγγελματικό · μετά δωρεάν έως 10 παραστατικά/μήνα
        </p>
      </section>

      {/* Features */}
      <section className="border-t border-slate-800 bg-slate-900/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold mb-12">
            Οι βασικές εργασίες τιμολόγησης, πιο γρήγορα.
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold mb-4">Απλή τιμολόγηση</h2>
          <p className="text-center text-slate-400 mb-12">
            Ξεκινήστε δωρεάν. Αναβαθμίστε όταν το χρειαστείτε.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-amber-500 bg-amber-500/5 scale-105"
                    : "border-slate-800 bg-slate-950"
                }`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/" className="mt-8 block">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                        : "bg-slate-800 text-white hover:bg-slate-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-amber-500 text-xs font-bold text-slate-950">
              K
            </div>
            <span>kiros.gr · Φτιαγμένο στην Ελλάδα</span>
          </div>
          <p>Συμβατό με ΑΑΔΕ · GDPR · Δεδομένα στην ΕΕ</p>
        </div>
      </footer>
    </div>
  );
}
