import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { CoursesList } from "@/components/courses/courses-list";
import { CoursesHeader } from "@/components/courses/courses-header";

export const metadata = {
  title: "Courses | Dmiraki Admin",
  description: "Manage your digital courses",
};

export default function CoursesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Courses"
        text="Create and manage your digital courses."
      />
      <CoursesHeader />
      <CoursesList />
    </DashboardShell>
  );
}