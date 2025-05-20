import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link to="/" className="font-bold text-xl flex font-recoleta">
            d'miraki
          </Link>
          <p className="text-muted-foreground font-normal text-base">
            Creating digital excellence
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/company/dmiraki" className="opacity-60 hover:opacity-100">
              Linkedin
            </a>
          </div>
          <div>
            <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/dmirakihq" className="opacity-60 hover:opacity-100">
              Instagram
            </a>
          </div>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              Twitter
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Services</h3>
          <div>
            <Link to="/brand-and-reach/social-media-marketing-and-management" className="opacity-60 hover:opacity-100">
              Social Media
            </Link>
          </div>
          <div>
            <Link to="/brand-and-reach/branding-and-designing" className="opacity-60 hover:opacity-100">
              Branding
            </Link>
          </div>
          <div>
            <Link to="/brand-and-reach/profitable-performance-marketing" className="opacity-60 hover:opacity-100">
              Marketing
            </Link>
          </div>
          <div>
            <Link to="/code-and-build/web-design-and-development" className="opacity-60 hover:opacity-100">
              Web Development
            </Link>
          </div>
          <div>
            <Link to="/brand-and-reach/content-creation" className="opacity-60 hover:opacity-100">
              Content Creation
            </Link>
          </div>
          <div>
            <Link to="/code-and-build/ui-and-ux-design" className="opacity-60 hover:opacity-100">
              UI/UX Design
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <div>
            <Link to="/terms-and-conditions" className="opacity-60 hover:opacity-100">
              Terms & Conditions
            </Link>
          </div>
          <div>
            <Link to="/privacy-policy" className="opacity-60 hover:opacity-100">
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link to="/disclaimer" className="opacity-60 hover:opacity-100">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; 2025 DMiraki. All rights reserved.</h3>
      </section>
    </footer>
  );
};
