"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
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
      <Button asChild>
        <Link href="/dashboard/blogs/new">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Blog
        </Link>
      </Button>
    </div>
  );
}