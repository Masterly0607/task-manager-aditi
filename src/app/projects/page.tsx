// "use client";

// import { ProjectCard } from "@/components/projects/project-card";

// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/procress";
// import { Project } from "@/features/projects/types";

// type Props = {
//   project: Project;
// };

// export default function ProjectDetailHeader({ project }: Props) {
//   const progress =
//     project.tasksTotal === 0
//       ? 0
//       : Math.round((project.tasksCompleted / project.tasksTotal) * 100);

//   return (
//     <div className="space-y-4">
//       {/* Title & Status */}
//       <div className="flex items-start justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">{project.name}</h1>
//           <p className="text-muted-foreground">{project.description}</p>
//         </div>

//         <Badge variant={project.status === "active" ? "default" : "secondary"}>
//           {project.status}
//         </Badge>
//       </div>

//       {/* Due date */}
//       <p className="text-sm text-muted-foreground">
//         Due date:{" "}
//         <span className="font-medium">
//           {new Date(project.dueDate).toLocaleDateString()}
//         </span>
//       </p>

//       {/* Progress */}
//       <div className="space-y-1">
//         <Progress value={progress} />
//         <p className="text-xs text-muted-foreground">
//           {project.tasksCompleted} / {project.tasksTotal} tasks completed
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";


import { Button } from "@/components/ui/button";
import { useProjects } from "@/features/projects/hooks";

import { ProjectCard } from "@/components/projects/project-card";

export default function ProjectsPage() {
  const q = useProjects();

  if (q.isLoading) return <Loader label="Loading projects..." />;
  if (q.isError)
    return (
      <ErrorState
        title="Failed to load projects"
        message="Check json-server on :3001"
        onRetry={() => q.refetch()}
      />
    );

  const projects = q.data ?? [];

  return (
    <div className="space-y-4">
      <PageHeader
        title="Projects"
        subtitle={`${projects.length} active projects`}
        right={
          <Button disabled className="rounded-xl">
            + New Project
          </Button>
        }
      />

      {projects.length === 0 ? (
        <EmptyState title="No projects" message="Add projects in db.json" />
      ) : (
        <div className="space-y-4">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}



