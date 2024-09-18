import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PULSWebsite from "./components/PULSWebsite";
import EtchSketch from "./components/EtchSketch";
import Guidebook from "./components/Guidebook";
import Projects from "./components/Projects";
import About from "./components/About";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import RCMP from "./components/RCMP";
import Hackathon from "./components/Hackathon";


export default function App() {
  return (
    <Router basename="/portfolio">
      <div>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/art" element={<Art />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/puls" element={<PULSWebsite />}></Route>
          <Route path="/etch-a-sketch" element={<EtchSketch />}></Route>
          <Route path="/guidebook" element={<Guidebook />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/rcmp" element={<RCMP />}></Route>
          <Route path="/hackathon" element={<Hackathon />}></Route>
        </Routes>
      </div>
    </Router>
  );
}