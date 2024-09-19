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
    <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/art" element={<Art />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/puls" element={<PULSWebsite />}/>
          <Route path="/etch-a-sketch" element={<EtchSketch />}/>
          <Route path="/guidebook" element={<Guidebook />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/rcmp" element={<RCMP />}/>
          <Route path="/hackathon" element={<Hackathon />}/>
        </Routes>
    </Router>
  );
}