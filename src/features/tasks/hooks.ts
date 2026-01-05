"use client";

import { useQuery } from "@tanstack/react-query";
import { getTask, getTasks } from "./api";
import { taskKeys } from "./query-keys";

export function useTasks(params?: { projectId?: string }) {
  return useQuery({
    queryKey: taskKeys.list(params ?? {}),
    queryFn: () => getTasks(params),
  });
}

export function useTask(id: string) {
  return useQuery({
    queryKey: taskKeys.detail(id),
    queryFn: () => getTask(id),
    enabled: !!id,
  });
}
