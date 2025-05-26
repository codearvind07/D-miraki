import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"
import {  HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query'
const client = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <HelmetProvider>
 <QueryClientProvider client={client}>

    <ThemeProvider>
      <Analytics/>
      <App />
    </ThemeProvider>
 </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
