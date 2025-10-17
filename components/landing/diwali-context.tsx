"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface DiwaliContextType {
  isFirstLoad: boolean;
  setFirstLoadComplete: () => void;
}

const DiwaliContext = createContext<DiwaliContextType | undefined>(undefined);

export function DiwaliProvider({ children }: { children: React.ReactNode }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load by looking at sessionStorage
    const firstLoad = sessionStorage.getItem("diwaliFirstLoad");
    if (firstLoad === "completed") {
      setIsFirstLoad(false);
    }
  }, []);

  const setFirstLoadComplete = () => {
    setIsFirstLoad(false);
    sessionStorage.setItem("diwaliFirstLoad", "completed");
  };

  return (
    <DiwaliContext.Provider value={{ isFirstLoad, setFirstLoadComplete }}>
      {children}
    </DiwaliContext.Provider>
  );
}

export function useDiwali() {
  const context = useContext(DiwaliContext);
  if (context === undefined) {
    throw new Error("useDiwali must be used within a DiwaliProvider");
  }
  return context;
}