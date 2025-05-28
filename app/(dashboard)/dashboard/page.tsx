import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { DashboardChart } from "@/components/dashboard/dashboard-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export const metadata = {
  title: "Dashboard | Dmiraki Admin",
  description: "Admin Dashboard Overview",
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Overview of your business metrics."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCards />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <DashboardChart />
        </div>
        <div className="col-span-3">
          <RecentActivity />
        </div>
      </div>
    </DashboardShell>
  );
}