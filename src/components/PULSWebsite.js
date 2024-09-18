import {Link} from "react-router-dom";

export default function PULSWebsite(){
  return(
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">PULS McGill Website</h2>
      <p>By: Maggie Chen, Tess Gomper, Vanessa Akhras</p>
      <p>COMP307 (Web Development) | Fall 2023</p>
      <p>
        The goal of this project was to create a fast website for the Physiology Undergraduate League of Students (PULS)
        with admin capabilites. The PULS council originally went directly into source code to make updates to the website,
        our team created a simple UI for them to make changes without doing so!
      </p>

      <p>GitHub repo: <a className="interactive link" href="https://github.com/tgompper1/PULS-website">https://github.com/tgompper1/PULS-website</a></p>
      
      <br />
      <h3>Demo:</h3>
      <div>
        <video loop playsInline muted autoPlay className="demo-video">
          <source  src="videos\puls-demo.mov" type="video/mp4"/>
        </video>
      </div>
      <br />
      <br />
    </div>
  )
}