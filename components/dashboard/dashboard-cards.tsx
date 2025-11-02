import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, FileText, BookOpen, DollarSign } from "lucide-react";
import Link from "next/link";

export function DashboardCards() {
  const cards = [
    {
      title: "Total Users",
      value: "1,892",
      change: "+12.5%",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
      positive: true,
      href: "/dashboard/users",
    },
    {
      title: "Blog Posts",
      value: "48",
      change: "+32.1%",
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      positive: true,
      href: "/dashboard/blogs",
    },
    {
      title: "Active Courses",
      value: "12",
      change: "+2 this month",
      icon: <BookOpen className="h-5 w-5 text-muted-foreground" />,
      positive: true,
      href: "/dashboard/courses",
    },
    {
      title: "Revenue",
      value: "$24,389",
      change: "+18.2%",
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />,
      positive: true,
      href: "/dashboard",
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <Link href={card.href} key={index}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p
                className={`text-xs ${
                  card.positive ? "text-color-2" : "text-destructive"
                }`}
              >
                {card.change}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}