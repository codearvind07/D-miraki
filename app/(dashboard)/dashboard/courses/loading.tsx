import { Loader2 } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function CoursesLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Courses"
        text="Loading courses..."
      />
      <div className="flex items-center justify-center h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    </DashboardShell>
  );
}