
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/landing/navbar';
import { FooterSection } from '@/components/landing/footer-section';
import { Contact } from '@/components/landing/Contact';
import { FAQ } from '@/components/landing/FAQ';
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'DMiraki | Elevate Your Brand with Digital Excellence',
  description: 'DMiraki is your trusted digital partner for SEO, branding, web design, marketing strategies, and IT solutions. Transform your vision into impact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="icon" 
          href="/favicon.ico" 
          sizes="any" 
        />
      </head>
      <body className={cn('min-h-screen w-full font-sans antialiased', inter.variable)}>
        <ThemeProvider
         
        >
         

        
              <Navbar />
          {children}
           <Contact />
              <FAQ />
           <FooterSection />
        
          <Toaster />
           
        </ThemeProvider>
      </body>
    </html>
  );
}