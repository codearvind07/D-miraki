"use client";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ContactsList } from "@/components/contacts/contacts-list";
import { ContactsHeader } from "@/components/contacts/contacts-header";

import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<{ contacts: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("adminToken");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  useEffect(() => {
    async function fetchContacts() {
      setIsLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch("/api/contacts", {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      const result = await response.json();
      setData({ contacts: result.contacts || [] });
      setIsLoading(false);
    }
    if (token) {
      fetchContacts();
    }
  }, [token]);

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Contacts"
        text="Manage and respond to contact form submissions."
      />
      <ContactsHeader />
      <ContactsList initialContacts={data?.contacts} isLoading={isLoading} />
    </DashboardShell>
  );
}
