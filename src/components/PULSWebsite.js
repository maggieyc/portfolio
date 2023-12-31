import {Link} from "react-router-dom";

export default function PULSWebsite(){
  return(
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">PULS McGill Website</h2>
      <p>By: Maggie Chen, Tess Gomper, Vanessa Akhras</p>
      <p>COMP307 (Web Development) | Fall 2023</p>
      <p>
        Goal: Create a fast website for the Physiology Undergraduate League of Students (PULS)
        with admin capabilites. The PULS council currently
        goes directly into source code to make updates to the website, we created a simple UI for them
        to make changes without doing so!
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

      <h3>Wireframe:</h3>
      <p>
        Note: Only the blog, calendar and login have been implemented so far,
        we also hope to add a sleek new look, add additional pages and deploy the website
        in the next few months.
      </p>
      <br />
      <br />
    </div>
  )
}