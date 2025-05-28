import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader  >
        <MobileNav />
        <div className="flex container mx-auto py-4 flex-1 items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
           <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex cursor-pointer font-recoleta"
            >
              d'miraki
            </a>
          </NavigationMenuItem>
          </div>
          <UserNav />
        </div>
      </DashboardHeader>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <aside className="hidden md:flex">
          <DashboardNav />
        </aside>
        <main className="flex flex-col gap-8 pb-20 pt-4">{children}</main>
      </div>
    </div>
  );
}