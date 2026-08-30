"use client";

import { useState } from "react";
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
  Menu,
  X,
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
  const [open, setOpen] = useState(false);

  // Hide sidebar completely on landing page
  if (pathname === "/landing") return null;

  const NavContent = () => (
    <>
      <div className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950">
            K
          </div>
          <span className="text-lg font-semibold tracking-tight">kiros.gr</span>
        </div>
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(false)}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
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
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center gap-3 border-b border-slate-800 bg-slate-950 px-4 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="text-slate-300 hover:text-white"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-slate-950">
            K
          </div>
          <span className="font-semibold text-white">kiros.gr</span>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-950 text-slate-100 transition-transform duration-200 md:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <NavContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950 text-slate-100 shrink-0">
        <NavContent />
      </aside>
    </>
  );
}
