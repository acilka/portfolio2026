import { Routes, Route } from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      <ScrollToTop />
      <Navbar isDark={isDark} toggleTheme={toggle} />

      <main className="pt-24 pb-12 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
