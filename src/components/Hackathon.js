import {Link} from "react-router-dom";

export default function Hackathon(){
  return(
    <div className="page-container">
      <Link to="/projects" className="interactive link">Back</Link>
      <h2 className="page-title">VP Hackathon Subteam</h2>
      <p>McGill Women in Computer Science (McWiCS) | Sep 2022 - Apr 2024</p>
      <p>
        One of the highlights of my time at McGill was being on the executive team of McWiCS. As VP Hackathon Subteam, I had the chance to plan Hack McWiCS 2023 and 2024.
        I absolutley loved working on a team full of inspiring women in tech. We created a safe space for everyone to enjoy hacking and feel empowered!
      </p>
      <p>
        In 2023, I was in charge of sponsorships. I proactively reached out to companies and secured 6 sponsorships with companies such as DeepMind, Morgan Stanley and General Motors.
        The following year, I was in charge ot leading meetings, delegating tasks, and venue logistics. Hack McWiCS was a great success, with sponsors and hackers a like giving us positive feedback!
      </p>

      <img src="images\mcwics.jpg" className="image" alt="McGill Women in Computer Science team"></img>

      <br />
      <br />
    </div>
  )
}