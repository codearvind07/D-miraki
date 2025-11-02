"use client"
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/landing/navbar';
import { FooterSection } from '@/components/landing/footer-section';
import { Contact } from '@/components/landing/Contact';
import { FAQ } from '@/components/landing/FAQ';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setFadeIn(true), 100); // Slight delay for smooth transition
      }, 2000); // Loader duration
      return () => clearTimeout(timer);
    }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="icon" 
          href="/favicon.ico" 
          sizes="any" 
        />
      </head>
      <body className={cn('min-h-screen w-full font-sans antialiased bg-background')}>
         {isLoading ? (
                <Loader />
              ) : (
                <ThemeProvider>
                    <Navbar />
                    {children}
                    <Contact />
                    <FAQ />
                    <FooterSection />
          
                    <Toaster />
                </ThemeProvider>
              )}
      </body>
    </html>
  );
}