import AnimatedPage from "./AnimatedPage";
import Typewriter from "typewriter-effect"
import {Link} from "react-router-dom";

export default function Landing() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="title">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello!")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcome :)")
                        .start();
                }}
            />
        </div>
      </AnimatedPage>
      <div class="arrows">
        <Link to="/about">
          <img src="images\arrow-right.svg" class="arrow-button interactive" alt="right arrow"></img>
        </Link>
      </div>
    </div>
  );
}