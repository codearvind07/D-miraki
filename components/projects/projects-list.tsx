"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, truncate } from "@/lib/utils";
import { useState } from "react";
import { Pencil, Trash, Eye } from "lucide-react";
import Image from "next/image";

// Mock data
const initialProjects = [
  {
    id: "1",
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with shopping cart and payment processing functionality.",
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web-development",
    date: new Date("2023-07-10"),
  },
  {
    id: "2",
    title: "Finance Mobile App",
    description: "A mobile application for personal finance management with expense tracking and budgeting features.",
    image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mobile-app",
    date: new Date("2023-06-25"),
  },
  {
    id: "3",
    title: "Health Dashboard UI",
    description: "A clean and modern UI design for a health tracking dashboard with data visualization components.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "ui-design",
    date: new Date("2023-06-15"),
  },
  {
    id: "4",
    title: "Restaurant Branding",
    description: "Complete branding package for a new upscale restaurant including logo, color scheme, and print materials.",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "branding",
    date: new Date("2023-05-20"),
  },
  {
    id: "5",
    title: "Travel Blog Website",
    description: "A content-focused website for travel bloggers with custom post types and social media integration.",
    image: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web-development",
    date: new Date("2023-05-10"),
  },
  {
    id: "6",
    title: "Event Management App",
    description: "A mobile application for planning and managing events with RSVP functionality and notifications.",
    image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mobile-app",
    date: new Date("2023-04-28"),
  },
];

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
  const [projects, setProjects] = useState(initialProjects);

  const handleDelete = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <Badge>{getCategoryLabel(project.category)}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {truncate(project.description, 100)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {formatDate(project.date)}
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
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleDelete(project.id)}
              >
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