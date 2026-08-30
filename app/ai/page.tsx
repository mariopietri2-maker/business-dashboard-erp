"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Send, Sparkles } from "lucide-react";

const suggestions = [
  "Τιμολόγιο 500€ στη ΧΥΖ ΑΕ για ανάπτυξη ιστοσελίδας",
  "Δείξε μου τα ανεξόφλητα τιμολόγια",
  "Πόσο ΦΠΑ οφείλω αυτόν τον μήνα;",
  "Σάρωσε απόδειξη εξόδου",
  "Στείλε υπενθύμιση στον Παπαδόπουλο",
];

export default function AIPage() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Γεια! Είμαι ο βοηθός της επιχείρησής σας. Μπορείτε να μου πείτε τι θέλετε να κάνετε με μία πρόταση στα ελληνικά.\n\nΠαραδείγματα:\n• «Τιμολόγιο 300€ στον Κώστα για συμβουλευτική»\n• «Δείξε μου τα έσοδα του μήνα»\n• «Ποιοι πελάτες καθυστερούν πληρωμές;»",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      let reply =
        "Κατάλαβα το αίτημά σας. Σε πραγματική εφαρμογή αυτό θα δημιουργούσε το παραστατικό και θα το έστελνε στο myDATA.";

      if (userMsg.toLowerCase().includes("τιμολόγιο")) {
        reply =
          "✅ Ετοίμασα το τιμολόγιο:\n\n• Πελάτης: ΧΥΖ ΑΕ\n• Ποσό: 500,00 € + ΦΠΑ 24% = 620,00 €\n• Περιγραφή: Ανάπτυξη ιστοσελίδας\n\nΘέλετε να το επιβεβαιώσετε και να το στείλω στο myDATA;";
      } else if (userMsg.toLowerCase().includes("ανεξόφλητα")) {
        reply =
          "Βρήκα 12 ανεξόφλητα τιμολόγια συνολικής αξίας 41.767,64 €.\n\nΤα 3 πιο καθυστερημένα:\n1. Παπαδόπουλος ΑΕ — 8.200 € (45 ημέρες)\n2. Νικολάου ΟΕ — 5.400 € (32 ημέρες)\n3. Μαρκάκης ΙΚΕ — 3.100 € (28 ημέρες)";
      } else if (userMsg.toLowerCase().includes("φπα")) {
        reply =
          "Για τον τρέχοντα μήνα:\n\n• ΦΠΑ εισπραχθέν: 4.820,40 €\n• ΦΠΑ εκπιπτόμενο: 2.451,80 €\n• **Υπόλοιπο προς απόδοση: 2.368,60 €**";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }, 800);
  };

  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Bot className="h-7 w-7 text-amber-400" />
          Βοηθός AI
        </h1>
        <p className="text-sm text-slate-400">
          Γράψτε ή υπαγορεύστε στα ελληνικά — τιμολόγια, στατιστικά, υπενθυμίσεις
        </p>
      </div>

      <Card className="flex flex-1 flex-col border-slate-800 bg-slate-950">
        <CardContent className="flex flex-1 flex-col p-0">
          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-amber-500 text-slate-950"
                      : "bg-slate-800 text-slate-100"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-2 border-t border-slate-800 px-6 py-3">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300 hover:border-amber-500/50 hover:text-amber-400"
              >
                <Sparkles className="mr-1 inline h-3 w-3" />
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-slate-800 p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Πληκτρολογήστε ή υπαγορεύστε... π.χ. Τιμολόγιο 200€ στον Γιάννη"
              className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
            />
            <Button
              onClick={handleSend}
              className="bg-amber-500 text-slate-950 hover:bg-amber-400"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
