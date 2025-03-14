import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
