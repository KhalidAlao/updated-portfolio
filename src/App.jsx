import  { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  const projectsRef = useRef(null);

  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <main className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero projectsRef={projectsRef} />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/projects" element={<Projects ref={projectsRef} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;