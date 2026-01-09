import { apiGet } from "@/lib/api-client";
import type { Project } from "./types";

export async function getProjects() {
  return apiGet<Project[]>(`/projects`);
}

export async function getProject(id: string) {
  return apiGet<Project>(`/projects/${id}`);
}
