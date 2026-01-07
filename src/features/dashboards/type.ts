export interface Subtask {
    id: string;
    title: string;
    completed: boolean;
}
export interface Task {
    id: string;
    title: string;
    description: string;
    projectId: string;
    status: "todo" | "in-progress" | "done";
    priority: "low" | "medium" | "high";
    dueDate: string;
    tags: string[];
    subtasks: Subtask[];
}
export interface Project {
    id: string;
    slug: string;
    name: string;
    color: string;
    tasksTotal: number;
    tasksCompleted: number;
}
export interface DashboardData {
    projects: Project[];
    tasks: Task[];
}
export interface TaskStats {
    total: number;
    completed: number;
    inProgress: number;
    overdue: number;
}

export interface PopulatedTask extends Task {
    projectName?: string;
}
