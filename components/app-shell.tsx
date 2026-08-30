"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/landing" || pathname === "/";

  // Public marketing pages: no sidebar
  if (isLanding && pathname === "/landing") {
    return <div className="min-h-screen bg-slate-950">{children}</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-slate-900 pt-14 md:pt-0">
        {children}
      </main>
    </div>
  );
}
