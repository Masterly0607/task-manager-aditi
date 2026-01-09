"use client";

import { ChevronRight, Flag } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

type RecentTaskItem = {
  id: string | number;
  title: string;
  projectName?: string;
  status: "in-progress" | "todo" | "done";
  priority?: "high" | "medium" | "low";
  dueDate?: string;
};

const statusStyles: Record<RecentTaskItem["status"], string> = {
  "in-progress": "bg-orange-50 text-orange-600 border-none hover:bg-orange-50",
  todo: "bg-slate-100 text-slate-600 border-none hover:bg-state-100",
  done: "bg-emerald-50 text-emerald-600 border-none hover:bg-emerald-50",
};

const priorityColors: Record<
  NonNullable<RecentTaskItem["priority"]>,
  string
> = {
  high: "text-red-500",
  medium: "text-orange-500",
  low: "text-blue-500",
};

const RecentTasks = ({ tasks }: { tasks?: RecentTaskItem[] }) => {
  return (
    <Card>
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="text-xl font-bold">Recent Tasks</CardTitle>

        <Button className="text-sm text-muted-foreground bg-white hover:bg-gray-50 hover:underline flex items-center gap-1 cursor-pointer transition-colors">
          View all <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-2">
        {tasks?.map((task) => (
          <Card
            key={task.id}
            className="flex items-center p-4 gap-2 bg-white rounded-xl border border-slate-100 shadow-sm"
          >
            <div className="flex justify-center items-center gap-4 w-full">
              <Checkbox
                checked={task.status === "done"}
                className="h-5 w-5 rounded-md border-slate-300"
              />

              <div className="items-center gap-4">
                <p
                  className={cn(
                    "font-semibold text-sm leading-none",
                    task.status === "done" &&
                      "text-muted-foreground line-through"
                  )}
                >
                  {task.title}
                </p>

                <p className="text-xs text-muted-foreground">
                  {task.projectName}
                </p>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <Badge
                  variant="outline"
                  className={cn(
                    "px-3 py-1 capitalize font-medium",
                    statusStyles[task.status]
                  )}
                >
                  {task.status.replace("-", " ")}
                </Badge>

                <div className="flex items-center gap-1.5 min-w-20 justify-end">
                  <Flag
                    className={cn(
                      "h-4 w-4 fill-current",
                      priorityColors[task.priority || "low"]
                    )}
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    {task.dueDate === "2025-01-20" ? "Today" : task.dueDate}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentTasks;
