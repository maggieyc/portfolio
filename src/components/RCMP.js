import {Link} from "react-router-dom";

export default function RCMP(){
  return(
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">IT Software Solutions Developer</h2>
      <p>Royal Canadian Mounted Police (RCMP) | May 2024 - Aug 2024</p>
      <p>
        During my summer internship at the RCMP, I worked on a number of projects related to improving efficiency and introducing technical solutions to the organization.
        This involved automating manual, time-consuming processes, as well as responding to technical support tickets. Below is an overview of some key projects I contributed to:
      </p>
  
      <p>
          1. I collaborated with a team of students to design, develop, and deploy a standalone API translation service capable of detecting and translating multiple languages within a single document. 
          The application featured a simple and intuitive user interface, effectively addressed queue management challenges, and had higher accuracy than the organization's existing language detection services. 
      </p>
      <p>
        2. I designed and implemented Python scripts to facilitate the analysis of raw data. This involved merging of multiple excel sheets, and storing them in an SQLite database. 
         We developed a user-friendly interface to display the data in a more accessible and meaningful way. 
      </p>

      <p>
        3. I digitized an internal training exam using  introducing automated grading and logging. Saving members of my team the hassle of going through and grading each exam manually.
      </p>

      <br />
      <br />
    </div>
  )
}