import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <div className="bg-paper min-h-screen font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
