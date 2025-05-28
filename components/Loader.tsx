import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Simulates a loading delay
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-48"
      >
        <div className="font-recoleta text-center">d'miraki</div>
      </motion.div>
    </div>
  );
}
