import AnimatedPage from "./AnimatedPage";
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
            <h2>Hi! I'm Maggie.</h2>
            <p>I'm a 4th year Computer Science student at McGill University.</p>
            <p>Hometown: Ottawa, ON</p>
            <p>My favorite things: my family, my friends, art, photography, food, travel, and volleyball!</p>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      <div>
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