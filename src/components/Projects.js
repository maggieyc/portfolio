import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";

export default function Projects() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="text">
          <h2>Projects and Experience</h2>
          <AnimatedPage>
            <ul className="list">
              <li>
                <Link to='/rcmp' className="link">
                  <h3 className="project interactive">RCMP</h3>
                </Link>
              </li>
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
            <img src="images\arrow-left.svg" class="arrow-button interactive" alt="left arrow"></img>
          </Link>
          <Link to="/art">
            <img src="images\arrow-right.svg" class="arrow-button interactive" alt="right arrow"></img>
          </Link>
      </div>
    </div>
    );
}
