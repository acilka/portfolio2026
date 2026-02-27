import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      <ScrollToTop />
      <Navbar isDark={isDark} toggleTheme={toggle} />

      <main className="pt-24 pb-12 relative">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="w-6 h-6 border-2 border-neutral-300 border-t-brand-accent rounded-full animate-spin" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projet/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </>
  );
}