import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Subtask } from "@/features/tasks/types";
import { Checkbox } from "@/components/ui/checkbox";

export function SubtasksCard({ subtasks }: { subtasks: Subtask[] }) {
  const done = subtasks.filter((s) => s.completed).length;

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">Subtasks</CardTitle>
        <div className="text-xs text-muted-foreground">
          {done} of {subtasks.length} completed
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {subtasks.map((s) => (
          <div key={s.id} className="flex items-center gap-3 text-sm">
            <Checkbox checked={s.completed} />
            <span
              className={
                s.completed ? "line-through text-muted-foreground" : ""
              }
            >
              {s.title}
            </span>
          </div>
        ))}
        <div className="pt-2 text-xs text-muted-foreground">+ Add subtask</div>
      </CardContent>
    </Card>
  );
}
