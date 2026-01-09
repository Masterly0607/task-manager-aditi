"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/procress";
import { Project } from "@/features/projects/types";

type Props = {
  project: Project;
};

export default function ProjectDetailHeader({ project }: Props) {
  const progress =
    project.tasksTotal === 0
      ? 0
      : Math.round(
          (project.tasksCompleted / project.tasksTotal) * 100
        );

  return (
    <div className="space-y-4">
      {/* Title & Status */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <Badge
          variant={project.status === "active" ? "default" : "secondary"}
        >
          {project.status}
        </Badge>
      </div>

      {/* Due date */}
      <p className="text-sm text-muted-foreground">
        Due date:{" "}
        <span className="font-medium">
          {new Date(project.dueDate).toLocaleDateString()}
        </span>
      </p>

      {/* Progress */}
      <div className="space-y-1">
        <Progress value={progress} />
        <p className="text-xs text-muted-foreground">
          {project.tasksCompleted} / {project.tasksTotal} tasks completed
        </p>
      </div>
    </div>
  );
}
