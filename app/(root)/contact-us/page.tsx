import React from 'react';
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6 w-full mx-auto container pt-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Contact Us</span>
      </nav>
      <h1 className="text-4xl font-bold  mb-4">
        Digital Marketing & Web Development Solutions
      </h1>
      <p className="text-lg ">
        Boost your online presence with our expert digital marketing strategies and custom web development services. 
        We specialize in SEO, social media marketing, responsive web design, and performance-optimized websites that drive results. 
        Whether you're a startup or an enterprise, we help you grow and engage your digital audience effectively.
      </p>
      
      <div className="mt-8">
        <Link href="/about" className="text-blue-600 hover:underline">
          Learn more about us →
        </Link>
      </div>
    </div>
  );
}
