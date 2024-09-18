import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";
import Typewriter from "typewriter-effect"

export default function Projects() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="text">
          <div className="subtitle half-title">
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("Projects and Experience")
                          .start();
                  }}
              />
            </div>
          <AnimatedPage>
            <ul className="list">
              <li>
                <Link to='/rcmp' className="link">
                  <h3 className="project interactive">RCMP</h3>
                </Link>
              </li>
              <li>
                <Link to='/hackathon' className="link">
                  <h3 className="project interactive">Hack McWiCS</h3>
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
      <div className="arrows">
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
