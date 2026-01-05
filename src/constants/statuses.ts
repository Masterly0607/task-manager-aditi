export const TASK_STATUSES = [
  { label: "To Do", value: "todo" },
  { label: "In Progress", value: "in_progress" },
  { label: "Done", value: "done" },
] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number]["value"];
