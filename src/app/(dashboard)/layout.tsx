import { HeaderSlot } from "@/components/common/header-slot";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh overflow-hidden">
      {/* Sidebar (fixed) */}
      <aside className="w-64 shrink-0 border-r bg-white">
        <Sidebar />
      </aside>

      {/* Right side */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header (sticky) */}
        <header className="sticky top-0 z-50 border-b bg-white">
          <div className="px-6">
            <HeaderSlot />
          </div>
        </header>

        {/* Only this scrolls */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="px-6 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
