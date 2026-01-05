import { apiClient } from "@/lib/api-client";
import type { Task } from "./types";

export async function getTasks(params?: { projectId?: string }) {
  const q = params?.projectId
    ? `?projectId=${encodeURIComponent(params.projectId)}`
    : "";
  return apiClient.get<Task[]>(`/tasks${q}`);
}

export async function getTask(id: string) {
  return apiClient.get<Task>(`/tasks/${id}`);
}
