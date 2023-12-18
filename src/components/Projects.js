import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";
import PULSWebsite from "./PULSWebsite";
import { useState } from "react";




export default function Projects() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="text">
          <h2>Projects</h2>
          <AnimatedPage>
            <ul className="list">
              <li>
                <Link to="/puls" className="link">
                   <h3 className="project interactive puls">PULS McGill Website</h3>
                </Link>
              </li>

              <li>
                <Link to="/guidebook" className="link">
                  <h3 className="project interactive">Fulcrum Guidebook</h3>
                </Link>
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
          <Link to="/art">
            <img src="images\arrow-right.svg" class="arrow-button interactive"></img>
          </Link>
      </div>
    </div>
    );
}
