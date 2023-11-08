import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css"

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
    <div>
      <h1>Maggie Chen</h1>
      <Link to="/about">Arrow</Link>
    </div>);
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/projects">Arrow</Link>
    </div>
  );
}

function Projects() {
  return <h2>Users</h2>;
}