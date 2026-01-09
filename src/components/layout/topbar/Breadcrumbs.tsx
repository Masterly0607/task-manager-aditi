"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, projects } from "@/lib/sidebar-data";
import { useTopbar } from "@/components/layout/topbar/topbar-context";

type Crumb = { label: string; href?: string };

export function Breadcrumbs() {
  const pathname = usePathname();
  const { subtitle } = useTopbar();

  const crumbs = React.useMemo<Crumb[]>(() => {
    if (pathname.startsWith("/projects")) {
      const base: Crumb[] = [{ label: "Projects", href: "/projects" }];

      const proj = projects.find(
        (p) => pathname === p.href || pathname.startsWith(p.href + "/")
      );

      if (proj) return [...base, { label: proj.name }];

      const slug = pathname.split("/").filter(Boolean)[1];
      if (slug) base.push({ label: slug.replace(/-/g, " ") });
      return base;
    }

    const nav = navItems.find(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/")
    );

    return [{ label: nav?.label ?? "TaskFlow" }];
  }, [pathname]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-lg font-semibold">
        {crumbs.map((c, idx) => (
          <span key={c.href ?? c.label} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="text-muted-foreground hover:text-foreground">
                {c.label}
              </Link>
            ) : (
              <span className="capitalize">{c.label}</span>
            )}
            {idx < crumbs.length - 1 && <span className="text-muted-foreground">›</span>}
          </span>
        ))}
      </div>

      {subtitle && (
        <div className="text-xs text-muted-foreground">
          {subtitle}
        </div>
      )}
    </div>
  );
}
