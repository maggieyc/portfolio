import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";

export default function Art(){
  return(
    <div className="container">
      <AnimatedPage>
        <h2>Gallery</h2>
        <AnimatedPage className="gallery">
          <img src="images\man-in-chair.jpg" className="gallery-img"></img>
          <img src="images\saxophone.jpg" className="gallery-img"></img>
          <img src="images\underwater.jpg" className="gallery-img"></img>
          <img src="images\beaver-tails.jpg" className="gallery-img"></img>
        </AnimatedPage>
      </AnimatedPage>
      <div>
        <Link to="/projects">
          <img src="images\arrow-left.svg" class="arrow-button interactive"></img>
        </Link>
        <Link to="/contact">
          <img src="images\arrow-right.svg" class="arrow-button interactive"></img>
        </Link>
      </div>
    </div>
  )
}