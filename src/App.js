import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AnimatedPage from "./AnimatedPage"

export default function App() {
  return (
    <Router>
      <div>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Landing() {
  return (
    <AnimatedPage>
      <div className="container">
        <h1>Maggie Chen</h1>
        <Link to="/about">arrow</Link>
      </div>
    </AnimatedPage>
    );
}

function About() {
  return (
    <AnimatedPage>
      <div className="container">
        <h1>About</h1>
        <div>
          <Link to="/">&rarr</Link>
          <Link to="/projects">&rarr</Link>
        </div>
      </div>
    </AnimatedPage>
  );
}

function Projects() {
  return (
    <AnimatedPage>
      <div className="container">
        <h2>Users</h2>
        <Link to="/about">&rarr</Link>
      </div>
    </AnimatedPage>
    );
}