import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"
import {  HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>

    <ThemeProvider>
      <Analytics/>
      <App />
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
