import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { BlogsList } from "@/components/blogs/blogs-list";
import { BlogsHeader } from "@/components/blogs/blogs-header";

export const metadata = {
  title: "Blogs | Dmiraki Admin",
  description: "View and manage your blog posts (manual management)",
};

export default function BlogsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Blogs"
        text="View your blog posts. To add or edit blogs, update the data/blogs.ts file manually."
      />
      <BlogsHeader />
      <BlogsList />
    </DashboardShell>
  );
}