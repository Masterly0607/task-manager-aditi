// export const TASK_STATUSES = [
//   { label: "To Do", value: "todo" },
//   { label: "In Progress", value: "in_progress" },
//   { label: "Done", value: "done" },
// ] as const;

// export type TaskStatus = (typeof TASK_STATUSES)[number]["value"];

export const taskStatuses = ["todo", "in-progress", "done"] as const;
export type TaskStatus = (typeof taskStatuses)[number];

export const taskPriorities = ["low", "medium", "high"] as const;
export type TaskPriority = (typeof taskPriorities)[number];