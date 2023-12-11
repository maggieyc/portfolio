import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import PULSWebsite from "./components/PULSWebsite";
import EtchSketch from "./components/EtchSketch";
import Art from "./components/Art";

export default function App() {
  return (
    <Router>
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
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Landing() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="title">
          <h1>Maggie Chen</h1>
        </div>
      </AnimatedPage>
      <Link to="/about">
        <img src="images\arrow-right.svg" class="arrow-button interactive"></img>
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="text col-12">
          <div className="img-container col-6">
            <img src='images\headshot.jpg' className="headshot interactive"></img>
          </div>
          <AnimatedPage className="col-6">
            <h2>Hi! I'm Maggie.</h2>
            <p>I'm a 4th year Computer Science student at McGill University.</p>
            <p>Hometown: Ottawa, ON</p>
            <p>My favorite things: my family, my friends, art, books, travel, nature and sports.</p>
            <Link to="/art" className="interactive link">Click here to see my recent paintings!</Link>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      <div>
        <Link to="/">
          <img src="images\arrow-left.svg" class="arrow-button interactive"></img>
        </Link>
        <Link to="/projects">
          <img src="images\arrow-right.svg" class="arrow-button interactive"></img>
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="text">
          <h2>Projects</h2>
          <AnimatedPage>
            <ul className="projects">
              <li>
                <Link to='/puls' className="link">
                  <h3 className="project interactive">PULS McGill Website</h3>
                </Link>
              </li>

              <li>
                <h3 className="project interactive">Fulcrum Guidebook</h3>
              </li>

              <li>
                <Link to='/etch-a-sketch' className="link">
                  <h3 className="project interactive">Etch-a-Sketch</h3>
                </Link>
              </li>
            </ul>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      <div>
        <Link to="/about">
          <img src="images\arrow-left.svg" class="arrow-button interactive"></img>
        </Link>
        <Link to="/contact">
          <img src="images\arrow-right.svg" class="arrow-button interactive"></img>
        </Link>
      </div>
    </div>
    );
}

function Contact(){
  return(
    <div className="container">
      <AnimatedPage>
        <div className="text">
          <h2>Contact me</h2>
          <p></p>
        </div>
      </AnimatedPage>
      <div>
        <Link to="/projects">
          <img src="images\arrow-left.svg" class="arrow-button interactive"></img>
        </Link>
      </div>
    </div>
  );
}