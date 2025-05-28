import LoginForm from "@/components/auth/login-form";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Login | Dmiraki",
  description: "Login to your Dmiraki account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
        
        <LoginForm />
        
      </div>
    </div>
  );
}

