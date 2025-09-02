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
import { MoreHorizontal, Eye, Edit, Trash, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, truncate } from "@/lib/utils";
import { useState, useEffect } from "react";
import { getAllBlogs } from "@/data/blogs";

type Blog = {
  _id: string;
  title: string;
  excerpt: string;
  status: string;
  publishedAt: string;
  views?: number;
  author: {
    name: string;
  };
};

export function BlogsList() {
  const blogs = getAllBlogs();
  const [sortedBlogs, setSortedBlogs] = useState(blogs);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Blog;
    direction: "ascending" | "descending";
  } | null>(null);

  const isLoading = false;
  const error = null;

  useEffect(() => {
    setSortedBlogs(blogs);
  }, [blogs]);

  const handleSort = (key: keyof Blog) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig?.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sorted = [...blogs];
    sorted.sort((a: any, b: any) => {
      const aValue = a[key];
      const bValue = b[key];
      if (direction === "ascending") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
    setSortedBlogs(sorted);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">
              <Button variant="ghost" onClick={() => handleSort("title")}>
                Title
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button variant="ghost" onClick={() => handleSort("publishedAt")}>
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden lg:table-cell">Author</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading && blogs.length > 0 ? (
            sortedBlogs.map((blog:any) => (
              <TableRow key={blog._id}>
                <TableCell className="font-medium">
                  <div>
                    <div className="font-medium">{blog.title}</div>
                    <div className="text-sm text-muted-foreground hidden md:block">
                      {truncate(blog.excerpt, 60)}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(blog.publishedAt)}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge
                    variant={blog.status === "published" ? "default" : "secondary"}
                  >
                    {blog.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {blog.author?.name || "N/A"}
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
                        <span>Edit (Manual Update Required)</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete (Manual Update Required)</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                {isLoading ? "Loading..." : "No blogs found."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
