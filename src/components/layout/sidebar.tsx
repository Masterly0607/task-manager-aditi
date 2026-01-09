"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useProjects } from "@/features/projects/hooks";
import { Search, Settings } from "lucide-react";
import { navItems } from "@/lib/sidebar-data";
import { routes } from "@/constants/routes";

const PROJECT_DOT_COLORS = [
  "bg-pink-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-purple-500",
];

export default function Sidebar() {
  const projectsQ = useProjects();
  const projects = projectsQ.data ?? [];
  const pathname = usePathname();

  return (
    <div className="sticky top-0 flex h-screen flex-col bg-white">
      {/* Brand */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
            <span className="text-sm font-semibold">⚡</span>
          </div>

          <Link href="/" className="text-base font-bold hover:opacity-90">
            TaskFlow
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="h-9 pl-9" placeholder="Search..." />
        </div>
      </div>

      <Separator />

      {/* Scroll area */}
      <ScrollArea className="flex-1">
        <div className="px-3 py-4">
          <div className="px-2 pb-2 text-xs font-medium text-muted-foreground">
            MENU
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-muted text-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          {/* Projects section (like your UI) */}
          <div className="mt-6">
            <div className="text-xs font-semibold tracking-wide text-muted-foreground">
              PROJECTS
            </div>

            <div className="mt-2 space-y-1">
              {projects.slice(0, 10).map((p, idx) => (
                <Link
                  key={p.id}
                  href={`${routes.projects}/${p.id}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                >
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      PROJECT_DOT_COLORS[idx % PROJECT_DOT_COLORS.length]
                    )}
                  />
                  <span className="truncate">{p.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      <Separator />

      {/* User */}
      <div className="p-4">
        <div className="flex items-center gap-3 rounded-xl border bg-white p-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="text-xs font-semibold">
              JD
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium">CHOR Narin</div>
            <div className="truncate text-xs text-muted-foreground">
              chornnarin@example.com
            </div>
          </div>

          <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
