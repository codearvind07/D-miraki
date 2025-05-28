import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";

export function RecentActivity() {
  const activities = [
    {
      user: {
        name: "John Doe",
        email: "john@example.com",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      action: "created a new blog post",
      target: "Getting Started with Next.js",
      date: new Date("2023-08-20T14:23:54"),
    },
    {
      user: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      action: "enrolled in course",
      target: "Advanced Web Development",
      date: new Date("2023-08-19T09:12:34"),
    },
    {
      user: {
        name: "Michael Chen",
        email: "michael@example.com",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      action: "submitted a contact form",
      target: "Project Inquiry",
      date: new Date("2023-08-18T16:45:12"),
    },
    {
      user: {
        name: "Emily Rodriguez",
        email: "emily@example.com",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      action: "updated project",
      target: "Portfolio Website",
      date: new Date("2023-08-17T11:32:09"),
    },
    {
      user: {
        name: "David Kim",
        email: "david@example.com",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      action: "registered new account",
      target: "",
      date: new Date("2023-08-16T15:18:27"),
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.image} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>{" "}
                  {activity.action}{" "}
                  {activity.target && (
                    <span className="font-semibold">"{activity.target}"</span>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(activity.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}