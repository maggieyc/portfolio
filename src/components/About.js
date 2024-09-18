import AnimatedPage from "./AnimatedPage";
import Typewriter from "typewriter-effect"
import {Link} from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="text col-12">
          <div className="img-container col-6">
            <img src='images\headshot.jpg' className="headshot interactive" alt="Maggie's Headshot"></img>
          </div>
          <AnimatedPage className="col-6">
            <div className="subtitle">
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("About Me")
                          .start();
                  }}
              />
            </div>
            <p>My name is Maggie Chen and I'm a 4th year student studying Computer Science at McGill University.</p>
            <p>Hometown: Ottawa, ON</p>
            <p>My favorite things: my family, my friends, art, photography, food, travel, and volleyball!</p>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      <div className="arrows">
        <Link to="/">
          <img src="images\arrow-left.svg" class="arrow-button interactive" alt="left arrow"></img>
        </Link>
        <Link to="/projects">
          <img src="images\arrow-right.svg" class="arrow-button interactive" alt="right arrow"></img>
        </Link>
      </div>
    </div>
  );
}