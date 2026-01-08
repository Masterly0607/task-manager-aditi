
// import { apiClient } from "@/lib/api-client";
// import type { Project } from "./types";

// export async function getProjects() {
//   return apiClient.get<Project[]>(`/projects`);
// }

// export async function getProject(id: string) {
//   return apiClient.get<Project>(`/projects/${id}`);
// }

import { Project, Task } from "./types";

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function getProject(id: string): Promise<Project> {
  const res = await fetch(`/api/projects/${id}`);
  if (!res.ok) throw new Error("Failed to fetch project");
  return res.json();
}

export async function getProjectTasks(id: string): Promise<Task[]> {
  const res = await fetch(`/api/projects/${id}/tasks`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}