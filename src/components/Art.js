import AnimatedPage from "./AnimatedPage";
import {Link} from "react-router-dom";
import Typewriter from "typewriter-effect"

export default function Art(){
  
  return(
    <div className="container">
      <AnimatedPage>
        <div className="gallery-container">
          <div className="subtitle gallery-title">
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("Gallery")
                          .start();
                  }}
              />
            </div>
                
          <AnimatedPage>
            <div className="text">
              <img src="images\man-in-chair.jpg" className="gallery-img-big" alt="painting of a man in chair"></img>
              <div className="gallery">
                <img src="images\beaver-tails.jpg" className="gallery-img" alt="painting of byward market in Ottawa"></img>
                <img src="images\saxophone.jpg" className="gallery-img" alt="painting of a man playing saxophone"></img>
                <img src="images\underwater.jpg" className="gallery-img" alt="painting of an underwater city"></img>
                <img src="images\bares.jpg" className="gallery-img" alt="sketch of the three bares statue"></img>
              </div>
            </div>
          </AnimatedPage>
        </div>
      </AnimatedPage>
      <div className="arrows">
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