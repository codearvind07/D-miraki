import Link from "next/link";

 const TermsAndConditions = () => {
    return (
      <section className="flex flex-col items-start justify-center py-20 px-6 max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Terms & Conditions</span>
        </nav>
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
  
        <p className="mb-4">
          Welcome to Dmiraki. By accessing or using our website, you agree to comply with and be bound
          by the following terms and conditions. If you do not agree with any part of these terms,
          please do not use our website.
        </p>
  
        <h2 className="text-lg font-semibold mt-6">1. Use of Website</h2>
        <p className="mb-4">
          You agree to use this website only for lawful purposes. Any unauthorized use of the site or
          misuse of the information provided is strictly prohibited and may result in legal action.
        </p>
  
        <h2 className="text-lg font-semibold mt-6">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, logos, graphics, and materials on Dmiraki are the property of the company and are
          protected by applicable copyright and intellectual property laws. You may not reproduce,
          distribute, or exploit any material without prior written consent from Dmiraki.
        </p>
  
        <h2 className="text-lg font-semibold mt-6">3. Modifications</h2>
        <p className="mb-4">
          Dmiraki reserves the right to update or modify these terms at any time without prior notice.
          Continued use of the website following any changes indicates your acceptance of the new terms.
        </p>
  
        <h2 className="text-lg font-semibold mt-6">4. Limitation of Liability</h2>
        <p className="mb-4">
          Dmiraki will not be held responsible for any loss or damage, direct or indirect, arising from
          the use or inability to use our services, website, or the content provided herein.
        </p>
  
        <p className="mt-8">
          If you have any questions or concerns regarding these Terms & Conditions, feel free to reach out at{" "}
          <a href="mailto:info@dmiraki.com" className="text-blue-600 hover:underline">info@dmiraki.com</a>.
        </p>
        
        <div className="mt-8">
          <Link href="/contact-us" className="text-blue-600 hover:underline">
            Contact Us →
          </Link>
        </div>
      </section>
    );
  };

  export default TermsAndConditions