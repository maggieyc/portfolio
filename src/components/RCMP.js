import {Link} from "react-router-dom";

export default function RCMP(){
  return(
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">IT Software Solutions Developer</h2>
      <p>Royal Canadian Mounted Police (RCMP)</p>
      <p>May 2024 - Aug 2024</p>
      <p>
        Collaborated with a team of student developers to design, develop, and deploy a standalone API translation service capable of detecting and translating multiple languages within a single document. 
        The application featured a simple and intuitive user interface, effectively addressed queue management challenges, and had higher accuracy than the organization's existing language detection services. 
        This solution automated language processing workflows and enhanced the overall efficiency of document translation.
      </p>
      <p>
        Designed and implemented Python scripts to address management and analysis of raw data. 
        Merging of multiple excel sheets, and storing them in an SQL Lite database. 
        Developed a user-friendly interface to display the data in a more accessible and meaningful way, facilitating analysis. 
      </p>
      <p>
        Developed an automated training exam for internal courses using HTML/CSS and Python, enhancing efficiency and accuracy.
      </p>
      <p>
        Conducted data curation and an in-depth literature review to develop a text classification model.
      </p>
      <br />
      <br />
    </div>
  )
}