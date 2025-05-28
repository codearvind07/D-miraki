"use client";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ContactsList } from "@/components/contacts/contacts-list";
import { ContactsHeader } from "@/components/contacts/contacts-header";
import { useContactList } from "@/api/api";
import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("adminToken");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  const { data } = useContactList(token || "");
 

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Contacts"
        text="Manage and respond to contact form submissions."
      />
      <ContactsHeader />
      <ContactsList initialContacts={data?.contacts} />
    </DashboardShell>
  );
}
