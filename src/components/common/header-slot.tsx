"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";

export function HeaderSlot() {
  const pathname = usePathname();

  // change header by page
  if (pathname === "/") {
    return (
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, John"
        right={
          <Button asChild>
            <Link href="/tasks/new">+ New Task</Link>
          </Button>
        }
      />
    );
  }

  if (pathname.startsWith("/tasks")) {
    return (
      <PageHeader
        title="Tasks"
        subtitle="Track and manage tasks"
        right={
          <Button asChild>
            <Link href="/tasks/new">+ New Task</Link>
          </Button>
        }
      />
    );
  }

  if (pathname.startsWith("/projects")) {
    return (
      <PageHeader
        title="Projects"
        subtitle="Manage your projects"
        right={
          <Button asChild>
            <Link href="/projects/new">+ New Project</Link>
          </Button>
        }
      />
    );
  }

  // fallback
  return <PageHeader title="TaskFlow" />;
}
