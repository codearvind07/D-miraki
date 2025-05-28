import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { BlogsList } from "@/components/blogs/blogs-list";
import { BlogsHeader } from "@/components/blogs/blogs-header";

export const metadata = {
  title: "Blogs | Dmiraki Admin",
  description: "Manage your blog posts",
};

export default function BlogsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Blogs"
        text="Create and manage your blog posts."
      />
      <BlogsHeader />
      <BlogsList />
    </DashboardShell>
  );
}