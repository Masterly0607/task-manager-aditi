"use client";
import { useQuery } from "@tanstack/react-query";
import getDashboardData from "./api";
import { PopulatedTask } from "./type";

const REFERENCE_DATE = new Date("2025-01-15");

const useDashboardStats = () => {
    return useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboardData,
        select: (data) => {
            const tasks = data.tasks;

            return {
                total: tasks.length,
                completed: tasks.filter((t) => t.status === "done").length,
                inProgress: tasks.filter((t) => t.status === "in-progress").length,
                overdue: tasks.filter((t) =>
                    t.status !== "done" && new Date(t.dueDate) < REFERENCE_DATE
                ).length
            }
        }
    })
}

const useRecentTask = () => {
    return useQuery({
        queryKey: ["recent-task"],
        queryFn: getDashboardData,
        select: (data): PopulatedTask[] => {
            return data.tasks
                .map((task) => ({
                    ...task,
                    projectName: data.projects.find((p) => p.id === task.projectId)?.name,
                }))
                .slice(0, 5)
        }
    })
}

export {useDashboardStats, useRecentTask};