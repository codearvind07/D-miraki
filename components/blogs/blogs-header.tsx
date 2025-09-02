"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function BlogsHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Input
        placeholder="Search blogs..."
        className="max-w-[300px]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4" />
        <span className="text-sm text-muted-foreground">
          To add/edit blogs, update data/blogs.ts
        </span>
      </div>
    </div>
  );
}