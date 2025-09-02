"use client";

import { MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export const Contact = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log form data (no API)
    console.log("Form Submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contactus">
      <hr className="w-11/12 mx-auto" />

      <div className="container flex flex-col md:flex-row py-24 sm:py-32">
        {/* Contact Info Section */}
        <div className="md:w-1/2 mb-4">
          <h3 className="text-start text-4xl font-bold">
            Dreaming Big? <br />
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Let's build it.
            </span>
          </h3>
          <p className="text-base text-muted-foreground text-start mt-4 mb-8">
            Have big ideas but unsure where to begin? Let's talk and find the perfect solution for your business.
          </p>

          <ul>
            {isContactPage ? (
              <>
                <a href={`tel:+919538948885`}>
                  <li className="flex my-2 flex-row gap-4">
                    <PhoneCallIcon width={20} />
                    <span>+91 95389 48885</span>
                  </li>
                </a>
                <a href={`tel:+919211341245`}>
                  <li className="flex my-2 flex-row gap-4">
                    <PhoneCallIcon width={20} />
                    <span>+91 92113 41245</span>
                  </li>
                </a>
              </>
            ) : (
              <a href={`tel:+919211341245`}>
                <li className="flex my-2 flex-row gap-4">
                  <PhoneCallIcon width={20} />
                  <span>+91 92113 41245</span>
                </li>
              </a>
            )}

            <a href="mailto:info@dmiraki.com">
              <li className="flex my-2 flex-row gap-4">
                <MailIcon width={20} />
                <span>info@dmiraki.com</span>
              </li>
            </a>

            <li className="flex my-2 flex-row gap-4">
              <MapPin width={20} />
              {isContactPage ? (
                <div>
                  <span>
                    B405, Celebrity Square apartment, Sarjapura Attibele Road, Bangalore -562017
                  </span>
                  <br />
                  <span>B-103, Sector-2 Noida-201301, India</span>
                </div>
              ) : (
                <span>B-103, Sector-2 Noida-201301, India</span>
              )}
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
        >
          <div className="flex flex-row gap-2">
            <Input
              required
              placeholder="First name"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              placeholder="Last Name"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <Input
            placeholder="Email"
            className="bg-muted/50 dark:bg-muted/80 rounded-none "
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            required
            placeholder="Phone number"
            className="bg-muted/50 dark:bg-muted/80 rounded-none "
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <Input
            placeholder="Enter subject"
            className="bg-muted/50 dark:bg-muted/80 rounded-none "
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            placeholder="Short description of the project"
            required
            className="flex w-full px-3 py-2 text-sm bg-muted/50 dark:bg-muted/80 rounded-none resize-none"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <Button type="submit">Send</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
