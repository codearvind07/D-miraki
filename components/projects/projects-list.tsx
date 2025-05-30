"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // import your skeleton
import { formatDate, truncate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Pencil, Trash, Eye } from "lucide-react";
import Image from "next/image";
import { useProjectList } from "@/api/api";

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "web-development":
      return "Web Development";
    case "mobile-app":
      return "Mobile App";
    case "ui-design":
      return "UI Design";
    case "branding":
      return "Branding";
    default:
      return category;
  }
};

export function ProjectsList() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("adminToken");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  const { data, isLoading } = useProjectList(token || "");

  const skeletonArray = new Array(6).fill(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading
        ? skeletonArray.map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-6 w-1/4" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Skeleton className="h-8 w-20" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </CardFooter>
            </Card>
          ))
        : data?.projects?.map((project: any) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project?.coverImage}
                  alt={project?.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project?.title}</CardTitle>
                  <Badge>{getCategoryLabel(project?.category)}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {truncate(project?.description, 100)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {formatDate(project?.createdAt)}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
    </div>
  );
}
