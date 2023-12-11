import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";
import PULSWebsite from "./PULSWebsite";
import { useState } from "react";




export default function Projects() {
  const [selected, setSelected] = useState("");
  return (
    <div className="container">
      <AnimatedPage>
        <div className="text">
          <h2>Projects</h2>
          <AnimatedPage>
            <ul className="list">
              <li>
                {selected === "" && <button onClick={() => setSelected("puls")}>
                   <h3 className="project interactive puls">PULS McGill Website</h3>
                </button>}
                <div class="container">
                  {selected !== "" && <button onClick={() => setSelected("")} className="interactive button project-button">Back</button>}
                  {selected === "puls" && <PULSWebsite />}
                </div>
              </li>

              <li>
                <Link to="/guidebook" className="link">
                  {selected === "" && <h3 className="project interactive">Fulcrum Guidebook</h3>}
                </Link>
              </li>

              <li>
                <Link to='/etch-a-sketch' className="link">
                  {selected === "" && <h3 className="project interactive">Etch-a-Sketch</h3>}
                </Link>
              </li>
            </ul>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      {selected === "" && <div>
        <Link to="/about">
          <img src="images\arrow-left.svg" class="arrow-button interactive"></img>
        </Link>
        <Link to="/art">
          <img src="images\arrow-right.svg" class="arrow-button interactive"></img>
        </Link>
      </div>}
    </div>
    );
}
