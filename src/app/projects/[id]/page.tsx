"use client";

import { useParams } from "next/navigation";
import { useProject, useProjectTasks } from "@/features/projects/hooks";
import ProjectDetailHeader from "@/components/projects/project-detail-header";
import ProjectTasksTable from "@/components/projects/project-tasks-table";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: project,
    isLoading: projectLoading,
  } = useProject(id);

  const {
    data: tasks,
    isLoading: tasksLoading,
  } = useProjectTasks(id);

  if (projectLoading || tasksLoading) {
    return <p>Loading project...</p>;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="space-y-6">
      <ProjectDetailHeader project={project} />
      <ProjectTasksTable tasks={tasks ?? []} />
    </div>
  );
}
