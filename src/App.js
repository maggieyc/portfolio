import React from "react";
import "./App.css"
import {
  HashRouter as Router,
  Switch,
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
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/about" component={About}/>
          <Route path="/art" component={Art}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/puls" component={PULSWebsite}/>
          <Route path="/etch-a-sketch" component={EtchSketch}/>
          <Route path="/guidebook" component={Guidebook}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/rcmp" component={RCMP}/>
          <Route path="/hackathon" component={Hackathon}/>
        </Switch>
    </Router>
  );
}