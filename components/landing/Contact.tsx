"use client"
import { MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "react-query";
import { submitContact } from "@/api/api";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


   const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationFn: submitContact,
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({
         firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message:""
      })
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Something went wrong!');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <section id="contactus">
      <hr className="w-11/12 mx-auto" />

      <div className="container flex flex-col md:flex-row py-24 sm:py-32">
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
            <a href="tel:+919354551409">
              <li className="flex my-2 flex-row gap-4">
                <span>
                  <PhoneCallIcon width={20} />
                </span>
                <span>+91 92113 41245</span>
              </li>
            </a>
            <a href="mailto:info@dmiraki.com">
              <li className="flex my-2 flex-row gap-4">
                <span>
                  <MailIcon width={20} />
                </span>
                <span>info@dmiraki.com</span>
              </li>
            </a>
            <li className="flex my-2 flex-row gap-4">
              <span>
                <MapPin width={20} />
              </span>
              <span>Noida, India</span>
            </li>
          </ul>
        </div>

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
              aria-label="first-name"
            />
            <Input
              placeholder="Last Name"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              aria-label="last-name"
            />
          </div>

          <Input
            placeholder="Email"
            className="bg-muted/50 dark:bg-muted/80 rounded-none "
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-label="email"
          />
          <div className="flex flex-row gap-2">
            <Input
              required
              placeholder="Phone number"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              aria-label="phonenumber"
            />
          </div>

           <Input
              placeholder="Enter subject"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="last-name"
            />

          <textarea
            placeholder="Short description of the project"
            required
            className="flex w-full  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-muted/50 dark:bg-muted/80 rounded-none resize-none"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-label="projectdescription"
          />
          <Button>Send</Button>
        </form>
        <ToastContainer />
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
