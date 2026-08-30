"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Receipt,
  Users,
  Package,
  FolderKanban,
  Wallet,
  Bot,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Αρχική", icon: LayoutDashboard },
  { href: "/sales", label: "Πωλήσεις", icon: FileText },
  { href: "/expenses", label: "Έξοδα", icon: Receipt },
  { href: "/customers", label: "Πελάτες", icon: Users },
  { href: "/products", label: "Προϊόντα", icon: Package },
  { href: "/projects", label: "Έργα", icon: FolderKanban },
  { href: "/cash", label: "Ταμείο", icon: Wallet },
  { href: "/ai", label: "Βοηθός AI", icon: Bot },
  { href: "/settings", label: "Ρυθμίσεις", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-slate-950 text-slate-100">
      <div className="flex h-16 items-center gap-2 border-b border-slate-800 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950">
          K
        </div>
        <span className="text-lg font-semibold tracking-tight">kiros.gr</span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-amber-500/20 text-amber-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100">
          <LogOut className="h-5 w-5" />
          Αποσύνδεση
        </button>
      </div>
    </aside>
  );
}
