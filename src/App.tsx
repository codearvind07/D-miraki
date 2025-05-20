import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import { About as AboutSection } from "./components/About";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import BrandingAndDesigning from "./pages/branding-and-designing";
import SocialMediaMarketingAndManagement from "./pages/social-media-marketing-and-management";
import UIAndUXDesign from "./pages/ui-and-ux-design";
import ContentCreation from "./pages/content-creation";
import WebDesignAndDevelopment from "./pages/web-design-and-development";
import ProfitablePerformanceMarketing from "./pages/profitable-performance-marketing";
import { Blogs } from "./pages/Blogs";
import BrandAndReach from "./pages/BrandAndReach";
import CodeAndBuild from "./pages/CodeAndBuild";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Contact } from "./components/Contact"; // Fixed: Import from the correct location
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { TermsAndConditions } from "./pages/terms-and-conditions";
import { Disclaimer } from "./pages/disclaimer";
import { PrivacyPolicy } from "./pages/privacy-policy";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`transition-opacity duration-1000 ease-in-out ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          <Router>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <AboutSection />
                      <HowItWorks />
                      <Features />
                      <Services />
                      <Cta />
                      <Testimonials />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/brand-and-reach" element={<BrandAndReach />} />
                <Route path="/code-and-build" element={<CodeAndBuild />} />
                <Route path="/brand-and-reach/social-media-marketing-and-management" element={<SocialMediaMarketingAndManagement />} />
                <Route path="/brand-and-reach/branding-and-designing" element={<BrandingAndDesigning />} />
                <Route path="/code-and-build/ui-and-ux-design" element={<UIAndUXDesign />} />
                <Route path="/brand-and-reach/content-creation" element={<ContentCreation />} />
                <Route path="/code-and-build/web-design-and-development" element={<WebDesignAndDevelopment />} />
                <Route path="/brand-and-reach/profitable-performance-marketing" element={<ProfitablePerformanceMarketing />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Contact />
              <FAQ />
              <Footer />
              <ScrollToTop />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
