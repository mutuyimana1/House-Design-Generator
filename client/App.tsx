import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GenerateDesign from "./pages/GenerateDesign";
import LatestDesigns from "./pages/LatestDesigns";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif]">
      <Navbar />
      <div className="flex-1">{children}</div>
      {/* Footer */}
      <footer className="w-full bg-navy text-white py-8 mt-auto">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[110px] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 10.002L7 4.002M7 4.002L11.311 8.705C11.897 9.344 12.19 9.663 12.575 9.833C12.959 10.002 13.393 10.002 14.26 10.002H22.5L18.189 5.299C17.603 4.66 17.31 4.341 16.925 4.171C16.541 4.001 16.107 4.001 15.24 4.001L7 4.002ZM11 8.5V20H7C5.114 20 4.172 20 3.586 19.414C3 18.828 3 17.885 3 16V8.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 20H17C18.886 20 19.828 20 20.414 19.414C21 18.828 21 17.885 21 16V10M4 7V4M7.125 11.25H7M7 20V16M15 14H17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Design Solution</span>
          </div>
          <p className="text-xs text-white/60 text-center">
            &copy; {new Date().getFullYear()} Design Solution. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/generate-design" element={<GenerateDesign />} />
            <Route path="/latest-designs" element={<LatestDesigns />} />
            <Route path="/about" element={<Placeholder title="About Us" />} />
            <Route path="/login" element={<Placeholder title="Login" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
