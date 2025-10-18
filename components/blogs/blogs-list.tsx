"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

// Mock data for blogs
const mockBlogs = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications.",
    category: "Web Development",
    publishedAt: "2024-01-15T14:30:00Z",
    readingTime: "5 min read",
    status: "published",
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    excerpt: "Explore advanced TypeScript patterns to improve your code quality.",
    category: "Programming",
    publishedAt: "2024-01-10T09:15:00Z",
    readingTime: "8 min read",
    status: "published",
  },
  {
    id: "3",
    title: "UI/UX Design Principles",
    excerpt: "Essential design principles every developer should know.",
    category: "Design",
    publishedAt: "2024-01-05T16:45:00Z",
    readingTime: "6 min read",
    status: "draft",
  },
];

export function BlogsList() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setBlogs(mockBlogs);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Card key={blog.id} className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{blog.title}</CardTitle>
              <Badge variant={blog.status === "published" ? "default" : "secondary"}>
                {blog.status}
              </Badge>
            </div>
            <CardDescription>{blog.excerpt}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{blog.category}</span>
              <span>{format(new Date(blog.publishedAt), "MMM d, yyyy")}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-sm text-muted-foreground">{blog.readingTime}</span>
            <div className="space-x-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="destructive" size="sm">Delete</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default BlogsList;