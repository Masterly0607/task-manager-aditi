"use client";

import { EmptyState } from "@/components/common/empty-state";
import { TaskRow } from "@/components/tasks/task-row";
import { Card } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjects } from "@/features/projects/hooks";
import { useTasks } from "@/features/tasks/hooks";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

type TabKey = "all" | "to-do" | "in-progress" | "done";

const statusByTab: Record<TabKey, string | null> = {
  all: null,
  "to-do": "to-do",
  "in-progress": "in-progress",
  done: "done",
};

export default function TasksPage() {
  const tasksQ = useTasks();
  const projectsQ = useProjects();
  const [tab, setTab] = useState<TabKey>("all");
  const [q, setQ] = useState("");

  // Map projectId -> projectName for easy lookup
  const projectNameById = useMemo(() => {
    const projects = projectsQ.data ?? [];
    return new Map(projects.map((p) => [p.id, p.name]));
  }, [projectsQ.data]);

  // Filter tasks by tab and search query
  const filtered = useMemo(() => {
    const tasks = tasksQ.data ?? [];
    const status = statusByTab[tab];

    return tasks
      .filter((t) => (status ? t.status === status : true))
      .filter((t) => {
        const s = q.trim().toLowerCase();
        if (!s) return true;
        return (
          t.title.toLowerCase().includes(s) ||
          (t.description ?? "").toLowerCase().includes(s)
        );
      })
      .sort((a, b) => {
        const aTime = a.dueDate ? new Date(a.dueDate).getTime() : 0;
        const bTime = b.dueDate ? new Date(b.dueDate).getTime() : 0;
        return aTime - bTime;
      });
  }, [tasksQ.data, tab, q]);

  // Loading state
  if (tasksQ.isLoading || projectsQ.isLoading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Tabs + Search */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Tabs value={tab} onValueChange={(v) => setTab(v as TabKey)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="to-do">To Do</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative w-full md:w-[320px]">
          <InputGroup>
            <InputGroupInput
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      {/* Task List */}
      <Card className="rounded-2xl">
        {filtered.length === 0 ? (
          <EmptyState
            title="No tasks found"
            message="You don’t have any tasks yet. Create one to get started."
            actionLabel="+ New Task"
            actionHref="/tasks/new"
          />
        ) : (
          <div className="divide-y">
            {filtered.map((t) => {
              const taskWithProjectName = {
                ...t,
                projectName: projectNameById.get(t.projectId) ?? "—",
              };

              return <TaskRow key={t.id} task={taskWithProjectName} />;
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
