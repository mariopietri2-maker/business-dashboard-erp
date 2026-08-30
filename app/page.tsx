"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { TrendingUp, TrendingDown, Wallet, FileText, Users, AlertCircle } from "lucide-react";

const monthlyData = [
  { month: "Ιαν", revenue: 18500, expenses: 9200 },
  { month: "Φεβ", revenue: 22100, expenses: 10500 },
  { month: "Μαρ", revenue: 19800, expenses: 9800 },
  { month: "Απρ", revenue: 25400, expenses: 11200 },
  { month: "Μάι", revenue: 23100, expenses: 10900 },
  { month: "Ιουν", revenue: 27800, expenses: 12500 },
  { month: "Ιουλ", revenue: 26500, expenses: 11800 },
  { month: "Αυγ", revenue: 24200, expenses: 10200 },
];

const customerSegments = [
  { name: "Υπηρεσίες", value: 48, color: "#f59e0b" },
  { name: "Προϊόντα", value: 27, color: "#3b82f6" },
  { name: "Έργα", value: 15, color: "#10b981" },
  { name: "Άλλα", value: 10, color: "#8b5cf6" },
];

const expenseBreakdown = [
  { name: "Μισθοί", value: 32, color: "#ef4444" },
  { name: "Ενοίκιο", value: 18, color: "#f97316" },
  { name: "Προμήθειες", value: 22, color: "#eab308" },
  { name: "Μάρκετινγκ", value: 12, color: "#22c55e" },
  { name: "Άλλα", value: 16, color: "#6366f1" },
];

const kpis = [
  {
    title: "Έσοδα (έτος)",
    value: 257170.04,
    change: "+12.4%",
    trend: "up",
    icon: TrendingUp,
    color: "text-emerald-400",
  },
  {
    title: "Έξοδα (έτος)",
    value: 138386.53,
    change: "+5.2%",
    trend: "up",
    icon: TrendingDown,
    color: "text-rose-400",
  },
  {
    title: "Καθαρό κέρδος",
    value: 118783.51,
    change: "+18.7%",
    trend: "up",
    icon: Wallet,
    color: "text-amber-400",
  },
  {
    title: "Ανεξόφλητα",
    value: 41767.64,
    change: "12 τιμολόγια",
    trend: "neutral",
    icon: AlertCircle,
    color: "text-orange-400",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Αρχική</h1>
          <p className="text-sm text-slate-400">
            Επισκόπηση επιχείρησης · Αύγουστος 2026
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Συνδεδεμένο με ΑΑΔΕ
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title} className="border-slate-800 bg-slate-950">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">
                  {kpi.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${kpi.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {formatCurrency(kpi.value)}
                </div>
                <p className="text-xs text-slate-500 mt-1">{kpi.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Monthly Revenue vs Expenses */}
        <Card className="border-slate-800 bg-slate-950 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base text-white">
              Μηνιαία Έσοδα & Έξοδα
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #1e293b",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => formatCurrency(value)}
                  />
                  <Bar dataKey="revenue" name="Έσοδα" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" name="Έξοδα" fill="#64748b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Customer Segments */}
        <Card className="border-slate-800 bg-slate-950">
          <CardHeader>
            <CardTitle className="text-base text-white">
              Κατανομή Πελατών
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #1e293b",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => `${value}%`}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Expense Breakdown */}
        <Card className="border-slate-800 bg-slate-950">
          <CardHeader>
            <CardTitle className="text-base text-white">
              Ανάλυση Εξόδων
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #1e293b",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="border-slate-800 bg-slate-950">
          <CardHeader>
            <CardTitle className="text-base text-white">Γρήγορα Στατιστικά</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-amber-400" />
                <span className="text-sm text-slate-300">Παραστατικά (μήνα)</span>
              </div>
              <span className="text-lg font-semibold text-white">47</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-slate-300">Ενεργοί πελάτες</span>
              </div>
              <span className="text-lg font-semibold text-white">128</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <Wallet className="h-5 w-5 text-emerald-400" />
                <span className="text-sm text-slate-300">ΦΠΑ προς απόδοση</span>
              </div>
              <span className="text-lg font-semibold text-white">
                {formatCurrency(2368.6)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-orange-400" />
                <span className="text-sm text-slate-300">ΕΦΚΑ εκτίμηση</span>
              </div>
              <span className="text-lg font-semibold text-white">
                {formatCurrency(890.0)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
