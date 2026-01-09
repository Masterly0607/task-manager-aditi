import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Task } from "@/features/tasks/types";
import { TaskStatusBadge } from "@/components/tasks/task-status-badge";
import { formatDate } from "@/lib/utils";

export function TaskDetailCard({ task }: { task: Task }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <CardTitle className="truncate">{task.title}</CardTitle>
            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <TaskStatusBadge status={task.status} />
              <span>Due {formatDate(task.dueDate)}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <div className="text-sm font-medium">Description</div>
          <div className="text-sm text-muted-foreground">
            {task.description}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium">Tags</div>
          <div className="mt-1 flex flex-wrap gap-2">
            {task.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
