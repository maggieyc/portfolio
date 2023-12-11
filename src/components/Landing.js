import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";

export default function Landing() {
  return (
    <div className="container">
      <AnimatedPage>
        <div className="title">
          <h1>Maggie Chen</h1>
        </div>
      </AnimatedPage>
      <Link to="/about">
        <img src="images\arrow-right.svg" class="arrow-button interactive"></img>
      </Link>
    </div>
  );
}