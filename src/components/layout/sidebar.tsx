"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Search,
  Settings,
} from "lucide-react";
import { navItems, projects } from "@/lib/sidebar-data";


const Sidebar = () => {
    const pathname = usePathname();
  return (
    <div className="flex h-full flex-col">
      {/* Top / Brand */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
            <span className="text-sm font-semibold">⚡</span>
          </div>
          <div className="leading-tight">
            <Link href="/" className="text-lg font-bold text-foreground hover:opacity-90">TaskFlow</Link>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4  text-muted-foreground" />
          <Input className="pl-9 text-black" placeholder="Search..." />
        </div>
      </div>

      <Separator />

      {/* Scrollable nav */}
      <ScrollArea className="flex-1">
        <div className="px-3 py-4">
          <div className="px-2 pb-2 text-xs font-medium text-muted-foreground">
            MENU
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              // active when exact match OR inside sub route
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center font-semibold gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-muted text-foreground font-medium" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className={cn("h-4 w-4", active ? "text-foreground" : "")} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6">
            <div className="px-2 pb-2 text-xs font-medium text-muted-foreground">
              PROJECTS
            </div>

           <div className="space-y-1">
              {projects.map((p) => {
                const active = pathname === p.href || pathname.startsWith(p.href + "/");
                return (
                  <Link
                    key={p.href}
                    href={`/projects${p.href}`}
                    className={cn(
                      "flex w-full  items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <span className={cn("h-2 w-2 rounded-full", p.dotClass)} />
                    <span className="truncate">{p.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollArea>

      <Separator />

      {/* Bottom user card */}
      <div className="p-4">
        <div className="flex items-center gap-3 rounded-xl border bg-white p-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="text-xs font-semibold">JD</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium">CHOR Narin</div>
            <div className="truncate text-xs text-muted-foreground">
              chornnarin@example.com
            </div>
          </div>

          <Button variant="ghost" size="icon" className="shrink-0">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
  
}

export default Sidebar;
