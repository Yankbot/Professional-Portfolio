import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
       </div> 
    </Router>
  )
}

export default App