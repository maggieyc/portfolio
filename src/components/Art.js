import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";
export default function Art(){
  
  return(
    <div className="container">
      <AnimatedPage>
        <div className="gallery-container">
          <h2>Gallery</h2>
        
          <AnimatedPage>
            <div className="gallery">
              <img src="images\man-in-chair.jpg" className="gallery-img" alt="painting of a man in chair"></img>
              <img src="images\saxophone.jpg" className="gallery-img" alt="painting of a man playing saxophone"></img>
              <img src="images\underwater.jpg" className="gallery-img" alt="painting of an underwater city"></img>
              <img src="images\beaver-tails.jpg" className="gallery-img" alt="painting of byward market in Ottawa"></img>
            </div>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      <div>
        <Link to="/projects">
          <img src="images\arrow-left.svg" class="arrow-button interactive" alt="left arrow"></img>
        </Link>
        <Link to="/contact">
          <img src="images\arrow-right.svg" class="arrow-button interactive" alt="right"></img>
        </Link>
      </div>
    </div>
  )
}