// src/pages/404.jsx or wherever your router handles 404
import { Link } from "react-router-dom"; // if using React Router

const NotFoundPage = () => {
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center p-6">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-6xl font-bold text-pink-500 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold">
          You've entered the <span className="text-yellow-400">Digital Bermuda Triangle</span>
        </h2>
        <p className="text-lg text-gray-300">
          This page is either hiding, got lost during a rebrand, or just never existed. But hey, at least you're stylishly lost.
        </p>

        <div className="space-y-2">
          <p className="text-sm text-gray-400">What you might be looking for:</p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <a href="/" className="text-blue-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/#services" className="text-blue-400 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/#work" className="text-blue-400 hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-blue-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <p className="italic text-sm text-gray-400">
          “Our 404 pages bounce more than logo ideas on a Monday.”
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 mt-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition-all"
        >
          🏠 Take Me Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
