"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "next-themes";

const data = [
  { name: "Jan", visitors: 1200, pageViews: 4000 },
  { name: "Feb", visitors: 1900, pageViews: 5200 },
  { name: "Mar", visitors: 2300, pageViews: 6800 },
  { name: "Apr", visitors: 2780, pageViews: 8200 },
  { name: "May", visitors: 3090, pageViews: 9100 },
  { name: "Jun", visitors: 3490, pageViews: 10300 },
  { name: "Jul", visitors: 3890, pageViews: 11500 },
];

const salesData = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 19000 },
  { name: "Mar", revenue: 23000 },
  { name: "Apr", revenue: 27800 },
  { name: "May", revenue: 30900 },
  { name: "Jun", revenue: 34900 },
  { name: "Jul", revenue: 38900 },
];

export function DashboardChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="traffic">
          <TabsList className="mb-4">
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
          </TabsList>
          <TabsContent value="traffic" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                <XAxis 
                  dataKey="name" 
                  stroke={isDark ? "#888" : "#666"}
                  tick={{ fill: isDark ? "#ccc" : "#333" }}
                />
                <YAxis 
                  stroke={isDark ? "#888" : "#666"}
                  tick={{ fill: isDark ? "#ccc" : "#333" }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? "hsl(var(--card))" : "white",
                    border: isDark ? "1px solid hsl(var(--border))" : "1px solid #ccc",
                    color: isDark ? "hsl(var(--foreground))" : "black"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="hsl(var(--color-1))"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="pageViews"
                  stroke="hsl(var(--color-5))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="sales" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={salesData}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
                <XAxis 
                  dataKey="name" 
                  stroke={isDark ? "#888" : "#666"}
                  tick={{ fill: isDark ? "#ccc" : "#333" }}
                />
                <YAxis 
                  stroke={isDark ? "#888" : "#666"}
                  tick={{ fill: isDark ? "#ccc" : "#333" }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? "hsl(var(--card))" : "white",
                    border: isDark ? "1px solid hsl(var(--border))" : "1px solid #ccc",
                    color: isDark ? "hsl(var(--foreground))" : "black"
                  }}
                  formatter={(value) => [`$${value}`, "Revenue"]}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--color-2))"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}