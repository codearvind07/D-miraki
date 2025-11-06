import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/landing/navbar';
import { FooterSection } from '@/components/landing/footer-section';
import { Contact } from '@/components/landing/Contact';
import { FAQ } from '@/components/landing/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Miraki',
  description:
    'Digital Miraki is a digital marketing agency that specializes in helping businesses grow their online presence. We offer a wide range of services, including SEO, content marketing, social media marketing, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Contact />
      <FAQ />
      <FooterSection />
      <Toaster />
    </ThemeProvider>
  );
}