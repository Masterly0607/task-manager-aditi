import { apiGet } from "@/lib/api-client";
import type { Task } from "./types";

export async function getTasks(params?: { projectId?: string }) {
  const q = params?.projectId
    ? `?projectId=${encodeURIComponent(params.projectId)}`
    : "";
  return apiGet<Task[]>(`/tasks${q}`);
}

export async function getTask(id: string) {
  return apiGet<Task>(`/tasks/${id}`);
}
