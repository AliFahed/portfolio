import "./projects.scss";
import { projectsData } from "../../projectsData";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="wrapper">
        <h2 className="projectsTitle">My Projects</h2>
        {projectsData.map((project, index) => (
          <div key={index}>
            <div className="projectsContainer">
              <div className="projectContainer">
                <img
                  src={project.img}
                  alt="project ScreenShoot"
                  className="projectImg"
                />
                <div className="projectDetailsContainer">
                  <h2 className="projectTitle">{project.title}</h2>
                  <div className="projectTechStack">
                    {project.techStack.map((tech, index) => (
                      <div key={index}>
                        <div className="techStack">
                          <img
                            src={tech.icon}
                            alt="Tech Icon"
                            className="techStackIcon"
                          />
                          <div>{tech.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="projectDescription">
                    <p>{project.desc}</p>
                  </div>
                  <div className="projectButtons">
                    <div className="projectCode">
                      <a
                        href={project.links.github}
                        className="code"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Review Code
                      </a>
                    </div>
                    <div className="projectLive">
                      <a
                        href={project.links.live}
                        className="live"
                        target="_blank"
                        rel="noreferrer"
                      >
                        See It Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
