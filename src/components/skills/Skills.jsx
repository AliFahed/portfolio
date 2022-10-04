import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="wrapper">
        <div className="gridContainer">
          <div className="frontEnd">
            <h2>Frond-end</h2>
            <div className="skillsWrapper">
              <div className="skillDetails">
                <img
                  src="assets/html-icon.svg"
                  alt="Html Icon"
                  className="skillIcon"
                />
                <p>HTML</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/css-icon.svg"
                  alt="CSS Icon"
                  className="skillIcon"
                />
                <p>CSS</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/sass-icon.svg"
                  alt="SASS Icon"
                  className="skillIcon"
                />
                <p>SASS</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/javascript-icon.svg"
                  alt="JavaScript Icon"
                  className="skillIcon"
                />
                <p>JavaScript</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/react-icon.svg"
                  alt="React Icon"
                  className="skillIcon"
                />
                <p>React</p>
              </div>
            </div>
          </div>

          <div className="backEnd">
            <h2>Back-end</h2>
            <div className="skillsWrapper">
              <div className="skillDetails">
                <img
                  src="assets/nodejs-icon.svg"
                  alt="NodeJs Icon"
                  className="skillIcon"
                />
                <p>NodeJs</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/express-icon.svg"
                  alt="Express Icon"
                  className="skillIcon"
                />
                <p>Express</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/pug-icon.svg"
                  alt="Pug/ Jade Icon"
                  className="skillIcon"
                />
                <p>Pug/ Jade</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/mongodb-icon.svg"
                  alt="MongoDB Icon"
                  className="skillIcon"
                />
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          <div className="otherTech">
            <h2>Technologies/ Tools</h2>
            <div className="skillsWrapper">
              <div className="skillDetails">
                <img
                  src="assets/git-icon.svg"
                  alt="Git Icon"
                  className="skillIcon"
                />
                <p>Git</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/github-icon.svg"
                  alt="GitHub Icon"
                  className="skillIcon"
                />
                <p>GitHub</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/webpack-icon.svg"
                  alt="Webpack Icon"
                  className="skillIcon"
                />
                <p>Webpack</p>
              </div>
              <div className="skillDetails">
                <img
                  src="assets/npm-icon.svg"
                  alt="NPM Icon"
                  className="skillIcon"
                />
                <p>NPM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
