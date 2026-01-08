import type { TaskPriority, TaskStatus } from "@/constants/statuses";

export type Subtask = {
  id: string;
  title: string;
  completed: boolean;
};

export type Comment = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  projectId: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  tags: string[];
  subtasks: Subtask[];
  comments: Comment[];
};
