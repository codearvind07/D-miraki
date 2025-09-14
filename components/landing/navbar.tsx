"use client"
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Menu } from "lucide-react";

import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import { isTokenExpired } from "@/utils";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/brand-and-reach",
    label: "Brand & Reach",
  },
  {
    href: "/code-and-build",
    label: "Code & Build",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useRouter(); // Hook for programmatic navigation


  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      // For anchor links, scroll to the element
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For other routes, navigate
      navigate.push(path);
    }
    setIsOpen(false); // Close the sheet if open
  };
const token: string = typeof window !== 'undefined' ? localStorage.getItem('adminToken') || '' : ''
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur dark:border-b-slate-700">
      <NavigationMenu className=" mx-6 mt-5 w-full">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex cursor-pointer font-recoleta"
            >
              {`d'miraki`}
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl font-recoleta">
                    d'miraki
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <button
                     
                      key={label}
                      onClick={() => handleNavigation(href)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </button>
                  ))}
                  <p
                   style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate.push("/contact-us")
                    }
                    className={`w-[110px] border ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    <ArrowTopRightIcon className="mr-2 w-5 h-5" />
                    Get in Touch
                  </p>
                  {!token || isTokenExpired(token) ? "":(
                    <>
                    {token && (
                  <Button
                    onClick={() =>
                      navigate.push("/dashboard")
                    }
                  >Dashboard</Button>
                )}
                    </>
                  )}
                  
                </nav>
               
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label }: RouteProps) => (
              <button
                key={label}
                onClick={() => handleNavigation(href)}
                className={`text-[17px] ${buttonVariants({
                  variant: "link",
                })}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <p
              onClick={() =>
                      navigate.push("/contact-us")
                    }
              className={`border ${buttonVariants({ variant: "ghost" })} cursor-pointer`}
            >
              <ArrowTopRightIcon className="mr-2 w-5 h-5" />
              Get in Touch
            </p>

             {token && (
                  <Button
                    onClick={() =>
                      navigate.push("/dashboard")
                    }
                  >Dashboard</Button>
                )}

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};