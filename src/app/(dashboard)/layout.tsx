import { HeaderSlot } from "@/components/common/header-slot";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r bg-white">
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="h-16 border-b bg-white">
          <HeaderSlot />
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 px-6 pt-6 pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
