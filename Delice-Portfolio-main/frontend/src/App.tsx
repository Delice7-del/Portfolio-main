import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import Certifications from "./pages/Certifications";
import OpenSource from "./pages/OpenSource";
import Resume from "./pages/Resume";
import Journal from "./pages/Journal";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";

import { useState } from "react";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Preloader onComplete={() => setIsLoading(false)} />
          {!isLoading && (
            <>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollManager>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/open-source" element={<OpenSource />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/journal" element={<Journal />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ScrollManager>
              </BrowserRouter>
            </>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
