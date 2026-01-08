// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { getProject, getProjects } from "./api";
// import { projectKeys } from "./query-keys";

// export function useProjects() {
//   return useQuery({
//     queryKey: projectKeys.list(),
//     queryFn: getProjects,
//   });
// }

// export function useProject(id: string) {
//   return useQuery({
//     queryKey: projectKeys.detail(id),
//     queryFn: () => getProject(id),
//     enabled: !!id,
//   });
// }


"use client";

import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects, getProjectTasks } from "./api";
import { projectKeys } from "./query-keys";

export function useProjects() {
  return useQuery({
    queryKey: projectKeys.list(),
    queryFn: getProjects,
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => getProject(id),
    enabled: !!id,
  });
}

export function useProjectTasks(id: string) {
  return useQuery({
    queryKey: [...projectKeys.detail(id), "tasks"],
    queryFn: () => getProjectTasks(id),
    enabled: !!id,
  });
}
