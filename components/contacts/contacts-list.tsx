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
import { MoreHorizontal, Eye, MessageSquare, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, truncate } from "@/lib/utils";
import { useMemo, useEffect, useState } from "react";

type Contact = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  status: string;
  createdAt: string;
};

type TransformedContact = {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: string;
  date: string;
};

export function ContactsList({ initialContacts, isLoading }: { initialContacts?: Contact[], isLoading: boolean }) {
  const transformedContacts = useMemo((): TransformedContact[] => {
    if (!Array.isArray(initialContacts)) return [];
    return initialContacts.map((contact) => ({
      id: contact._id,
      name: `${contact.firstName} ${contact.lastName}`,
      email: contact.email,
      subject: contact.subject,
      status: contact.status,
      date: contact.createdAt,
    }));
  }, [initialContacts]);

  const [contacts, setContacts] = useState<TransformedContact[]>([]);

  // Sync state with transformed contacts on load or update
  useEffect(() => {
    setContacts(transformedContacts);
  }, [transformedContacts]);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof TransformedContact;
    direction: "ascending" | "descending";
  } | null>(null);

  const sortedContacts = [...contacts];
  if (sortConfig !== null) {
    sortedContacts.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
  }

  const requestSort = (key: keyof TransformedContact) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "default";
      case "in-progress": return "secondary";
      case "resolved": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">
              <Button variant="ghost" onClick={() => requestSort("name")}>
                Name <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button variant="ghost" onClick={() => requestSort("subject")}>
                Subject <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden lg:table-cell">
              <Button variant="ghost" onClick={() => requestSort("date")}>
                Date <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedContacts.length > 0 ? (
            sortedContacts.map((contact:any) => (
              <TableRow key={contact.id}>
                <TableCell className="font-medium">
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.email}</div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {truncate(contact.subject, 40)}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {formatDate(contact?.date)}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(contact.status) as any}>
                    {contact.status}
                  </Badge>
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
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Reply</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                {isLoading ? "Loading..." : "No contacts found."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
