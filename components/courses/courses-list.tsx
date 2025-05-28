"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, Edit, Trash, ArrowUpDown, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, truncate } from "@/lib/utils";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

// Mock data
const initialCourses = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build responsive websites from scratch.",
    status: "published",
    date: new Date("2023-06-15"),
    students: 128,
    lessons: 24,
    completionRate: 68,
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    description: "Master advanced React patterns including hooks, context, and performance optimization techniques.",
    status: "published",
    date: new Date("2023-05-20"),
    students: 87,
    lessons: 18,
    completionRate: 72,
  },
  {
    id: "3",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native and JavaScript.",
    status: "draft",
    date: new Date("2023-07-10"),
    students: 0,
    lessons: 16,
    completionRate: 0,
  },
  {
    id: "4",
    title: "UI/UX Design Principles",
    description: "Learn the fundamentals of user interface and user experience design for digital products.",
    status: "published",
    date: new Date("2023-04-05"),
    students: 156,
    lessons: 20,
    completionRate: 84,
  },
  {
    id: "5",
    title: "Backend Development with Node.js",
    description: "Build scalable server-side applications using Node.js, Express, and MongoDB.",
    status: "archived",
    date: new Date("2022-11-15"),
    students: 92,
    lessons: 22,
    completionRate: 65,
  },
];

export function CoursesList() {
  const [courses, setCourses] = useState(initialCourses);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof typeof courses[0],
    direction: 'ascending' | 'descending'
  } | null>(null);

  const sortedCourses = [...courses];
  if (sortConfig !== null) {
    sortedCourses.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key: keyof typeof courses[0]) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "default";
      case "draft":
        return "secondary";
      case "archived":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">
              <Button
                variant="ghost"
                onClick={() => requestSort('title')}
              >
                Title
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button
                variant="ghost"
                onClick={() => requestSort('date')}
              >
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden lg:table-cell">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <Button
                  variant="ghost"
                  onClick={() => requestSort('students')}
                >
                  Students
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TableHead>
            <TableHead className="hidden xl:table-cell">Completion</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCourses.length > 0 ? (
            sortedCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">
                  <div>
                    <div className="font-medium">{course.title}</div>
                    <div className="text-sm text-muted-foreground hidden md:block">
                      {truncate(course.description, 60)}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(course.date)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={getStatusColor(course.status) as any}
                  >
                    {course.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <div className="flex items-center">
                    <span className="font-medium">{course.students}</span>
                    <span className="text-muted-foreground ml-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {course.lessons}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="hidden xl:table-cell">
                  <div className="flex items-center gap-2">
                    <Progress value={course.completionRate} className="h-2" />
                    <span className="text-sm">{course.completionRate}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(course.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No courses found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}