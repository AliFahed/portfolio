import "./about.scss";
import { LinkedIn, GitHub, Twitter } from "@material-ui/icons";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img
            src="assets/my-profile-pic.png"
            alt="Ali Profile"
            className="profilePicture"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="aboutMe">
            <h2>About Me</h2>
            <p>
              I Beleive in life-long learning, open to learn new technologies,
              tools, and explore Web Development Field. My focus is in
              full-stack development, creating full web applications using
              JavaScript Stack of ReactJS and NodeJS.
            </p>
            <div className="reachMe">
              <p>
                <span>Email:</span> alifahed67@gmail.com
              </p>
            </div>
          </div>
          <div className="contactLinks">
            <div className="contactWrapper">
              <a href="https://www.linkedin.com/in/ali-fahed-al-dhib-b94a07230/">
                <LinkedIn className="contactIcon linkedIn" />
              </a>
              <a href="https://github.com/AliFahed">
                <GitHub className="contactIcon github" />
              </a>
              <a href="https://twitter.com/AliFahed_">
                <Twitter className="contactIcon twitter" />
              </a>
            </div>
          </div>
          <div className="emailMe">
            <a href="#contact" className="email">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
