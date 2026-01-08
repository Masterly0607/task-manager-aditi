"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/features/projects/types";

type Props = {
  tasks: Task[];
};

export default function ProjectTasksTable({ tasks }: Props) {
  if (!tasks.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No tasks found for this project.
      </p>
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="grid grid-cols-12 bg-muted px-4 py-2 text-sm font-medium">
        <div className="col-span-1">Done</div>
        <div className="col-span-7">Task</div>
        <div className="col-span-4 text-right">Status</div>
      </div>

      <div className="divide-y">
        {tasks.map(task => (
          <div
            key={task.id}
            className="grid grid-cols-12 items-center px-4 py-3"
          >
            <div className="col-span-1">
              <Checkbox checked={task.status === "done"} />
            </div>

            <div
              className={`col-span-7 ${
                task.status === "done"
                  ? "line-through text-muted-foreground"
                  : ""
              }`}
            >
              {task.title}
            </div>

            <div className="col-span-4 text-right">
              <Badge variant="secondary">
                {task.status.replace("_", " ")}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
