import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProjectsList } from "@/components/projects/projects-list";
import { ProjectsHeader } from "@/components/projects/projects-header";

export const metadata = {
  title: "Projects | NextAdmin",
  description: "Manage your portfolio projects",
};

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Projects"
        text="Showcase and manage your portfolio projects."
      />
      <ProjectsHeader />
      <ProjectsList />
    </DashboardShell>
  );
}