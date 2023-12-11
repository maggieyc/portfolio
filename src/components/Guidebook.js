import {Link} from "react-router-dom";

export default function Guidebook(){
  return(
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">Fulcrum Guidebook</h2>
      <p>By: Maggie Chen</p>
      <p>Web Administrator | The Fulcrum Publishing Society | 2022</p>

      <h3>Demo:</h3>
      <div>
        <video loop playsInline muted autoPlay className="demo-video">
          <source  src="videos\fulcrum-demo.mov" type="video/mp4"/>
        </video>
      </div>
      <br />
      <br />
    </div>
  )
}