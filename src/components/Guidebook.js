import {Link} from "react-router-dom";

export default function Guidebook(){
  return(
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">Fulcrum Guidebook</h2>
      <p>By: Maggie Chen</p>
      <p>Web Administrator | The Fulcrum Publishing Society | 2022</p>

      <p>
        During Summer 2023 I worked at the Fulcrum Publishing Society, at the University of Ottawa. In my role as Web Administrator,
        I helped with various issues related to their WordPress website such as load issues and bugs. I also programmed an external webpage for
        their "101 Week Guide", which was a webpage with useful tips and tricks for freshmen students.
      </p>
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