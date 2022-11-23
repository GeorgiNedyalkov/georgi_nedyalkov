import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
