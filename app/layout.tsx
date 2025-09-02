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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover' as const,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const GTM_ID = 'GTM-WSK6FWS8';
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }} />
        <link rel="preload" href="/fonts/Recoleta-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Recoleta-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Recoleta-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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
        <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '637344718862714');
          fbq('track', 'PageView');
        `}
      </Script>
        
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSK6FWS8"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

      </body>
    </html>
  );
}
