import { CheckSquare, FolderKanban, LayoutDashboard } from "lucide-react";
import type React from "react";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "Projects", href: "/projects", icon: FolderKanban },
];

export const projects = [
  { name: "Marketing Campaign", dotClass: "bg-pink-500", href: "/marketing-campaign" },
  { name: "Product Launch", dotClass: "bg-blue-500", href: "/product-launch" },
  { name: "Engineering", dotClass: "bg-emerald-500", href: "/engineering" },
];
