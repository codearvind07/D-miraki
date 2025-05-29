import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import ClientQueryProvider from "./client-query-provider";
import "./index.css";
import "./App.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DMiraki | Elevate Your Brand with Digital Excellence",
  description:
    "DMiraki is your trusted digital partner for SEO, branding, web design, marketing strategies, and IT solutions. Transform your vision into impact.",
  keywords: [
    "DMiraki",
    "dmiraki",
    "DMIRAKI",
    "digital marketing",
    "branding",
    "SEO",
    "web design",
    "IT solutions",
    "social media marketing",
    "PPC",
  ],
  authors: [{ name: "DMiraki" }],
  robots: "index, follow",
  openGraph: {
    title: "DMiraki | Elevate Your Brand with Digital Excellence",
    description:
      "From stunning websites to high-converting marketing strategies, DMiraki is your all-in-one solution for digital success.",
    url: "https://dmiraki.com",
    images: [{ url: "https://dmiraki.com/assets/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DMiraki | Elevate Your Brand with Digital Excellence",
    description:
      "Your go-to digital marketing agency for high-performance websites, branding, and IT solutions.",
    images: ["https://dmiraki.com/assets/twitter-image.jpg"],
  },
  metadataBase: new URL("https://dmiraki.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "https://dmiraki.com/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       <title>DMiraki | Elevate Your Brand with Digital Excellence</title>
       <meta name="description" content="DMiraki is your trusted digital partner for SEO, branding, web design, marketing strategies, and IT solutions. Transform your vision into impact." />
        <meta name="keywords" content="DMiraki , dmiraki,DMIRAKI, digital marketing, Web Development, App Development, Digital Transformation, branding,SEO,web design,IT solutions,social media marketing,PPC" />
        <meta name="author" content="DMiraki" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
         <link rel="canonical" href="https://dmiraki.com" />


 <meta property="og:title" content="DMiraki - Elevate Your Brand with Digital Excellence" />
        <meta property="og:description" content="We specialize in Digital Marketing, Web Development, and App development, transforming businesses digitally." />
        <meta property="og:image" content="https://dmiraki.com/og-image.jpg" />
        <meta property="og:image:alt" content="DMiraki - Blockchain, Web3, and App Development Experts" />
        <meta property="og:url" content="https://dmiraki.com" />
        <meta property="og:type" content="website" />


         {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DMiraki - Blockchain, Web3 & App Development" />
        <meta name="twitter:description" content="We specialize in Digital Marketing, Web Development, and App development, transforming businesses digitally." />
        <meta name="twitter:image" content="https://dmiraki.com/twitter-image.jpg" />

        {/* Alternate Language Versions */}
        <link rel="alternate" href="https://dmiraki.com" hrefLang="x-default" />
        <link rel="alternate" href="https://dmiraki.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://dmiraki.com/es/" hrefLang="es" />

        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DMiraki",
              url: "https://dmiraki.com",
              logo: "https://dmiraki.com/assets/icon.png",
              description:
                "DMiraki is a full-service digital marketing and IT solutions agency helping businesses grow with tailored digital strategies.",
              sameAs: [
                "https://www.instagram.com/dmirakihq",
                "https://www.linkedin.com/company/dmiraki",
              ],
            }),
          }}
        />
         {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E3P558P7L4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E3P558P7L4');
          `}
        </Script>
         {/* Hotjar */}
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5322829,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body
        className={cn("min-h-screen w-full font-sans antialiased overflow-x-hidden", inter.variable)}
      >
        <ThemeProvider>
          <ClientQueryProvider>{children}</ClientQueryProvider>
          <Toaster />
          <ToastContainer />
           <Analytics />
           <SpeedInsights />
        </ThemeProvider>

       

       

        {/* Tawk.to Live Chat */}
        <Script id="tawkto-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/67b6170cae5ce4190e0b7d6a/1ikfkk2nh';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
