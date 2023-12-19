import {Link} from "react-router-dom";
export default function EtchSketch(){

  return (
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">Etch-A-Sketch</h2 >
      <p>By: Maggie Chen</p>
      <p>The Odin Project | 2023</p>
      <p>Fun Fact: I also created the background on Inkscape!</p>
      <p>(Click below and play with arrow keys)</p>
      <iframe title="Etch-A-Sketch" src="https://maggieyc.github.io/odin-etch-a-sketch/"></iframe>
      <br />
      <br />
      <br />
    </div>
  )
}