import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";

export default function Contact(){
  return(
    <div className="container">
      <AnimatedPage>
        <div className="text">
          <h2>Contact</h2>
          <AnimatedPage>
            <ul className="list">
              <li >
                <h3>
                  <a target="_blank"className="interactive link" href="https://github.com/maggieyc">GitHub: @maggieyc</a>
                </h3>
              </li>

              <li>
                <h3>maggieyc2@gmail.com</h3>
              </li>

              <li>
                <h3>
                  <a target="_blank" className="interactive link" href="https://www.linkedin.com/in/maggie-chen-8aa57322b/">Linkedin</a>
                </h3>
              </li>
            </ul>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      <div>
        <Link to="/art">
          <img src="images\arrow-left.svg" class="arrow-button interactive" alt="left arrow"></img>
        </Link>
      </div>
    </div>
  );
}