import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { UsersList } from "@/components/users/users-list";
import { UsersHeader } from "@/components/users/users-header";

export const metadata = {
  title: "Users | NextAdmin",
  description: "Manage your users",
};

export default function UsersPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Users"
        text="Manage user accounts and permissions."
      />
      <UsersHeader />
      <UsersList />
    </DashboardShell>
  );
}