import "./Projects.css";

function Projects() {
  return (

    <section className="projects" id="projects">

      <p className="section-tag">
        Featured Projects
      </p>

      <h2>
        Projects That Reflect My Development Journey
      </h2>

      {/* MAIN FEATURED PROJECT */}

      <div className="project-card featured-project">

        <div className="project-left">

          <img
            src="/images/cleanstreet.png"
            alt="Clean Street"
          />

        </div>

        <div className="project-right">

          <h3>
            Clean Street – Civic Issues Reporting And Tracking
          </h3>

          <p className="project-description">
            A secure civic complaint reporting and tracking
            platform developed during Infosys Internship 6.0
            using the MERN stack.
          </p>

          <div className="project-tech">

            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Tailwind</span>
            <span>JWT</span>

          </div>

          <div className="project-story">

            <h4>
              Project Journey
            </h4>

            <p>
              This project was a collaborative team effort focused 
              on developing an enterprise application to address a real-world problem.
              As the team lead, I led team collaboration and contributed to application development
              to ensure the successful delivery of the solution while following an Agile workflow.
            </p>

          </div>

          {/* ROLE SECTION */}
          <div className="project-role">

            <h4>
              Role
            </h4>

            <div className="role-pills">
               <span>Team Lead</span>
              <span>Developer</span>

            </div>

          </div>

          <div className="project-buttons">

            <a
              href="https://civic-issue-reporting-tracking-app-9lml.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Live Demo
              </button>
            </a>

            <a
              href="https://github.com/sindhu-027/Civic-issue-reporting-tracking-app-Infosys-internship"
              target="_blank"
              rel="noreferrer"
            >
              <button className="outline-btn">
                GitHub
              </button>
            </a>

          </div>

        </div>

      </div>

      {/* OTHER PROJECTS */}

      <div className="other-projects">

        {/* SCRUM FLOW */}

        <div className="small-project-card">

          <img
            src="/images/scrumflow.png"
            alt="Scrum Flow"
          />

          <h3>
            Scrum Flow – Agile Sprint Management
          </h3>

          <p>
            Built with the intention of understanding real-world software development practices 
            used in the industry. It gave a clear view of a structured sprint-based approach 
            with planning, milestones, progress tracking, and demos. It also provided exposure 
            to the end-to-end industry workflow from requirements gathering to feature delivery.
          </p>

          <div className="project-tech">

            <span>Angular</span>
            <span>.NET Core</span>
            <span>PostgreSQL</span>
            <span>C#</span>
            <span>Scrum</span>

          </div>

        </div>

        {/* ANGULAR RE-ARCHITECTURE */}

        <div className="small-project-card">

          <img
            src="/images/rearchitecture.png"
            alt="Angular Re-Architecture"
          />

          <h3>
            Civic Issue Reporting – Frontend Re-Architecture
          </h3>

          <p>
            Re-architectured the frontend of a civic issue
            reporting platform using Angular while integrating
            with the existing backend APIs and workflows.
          </p>

          <div className="project-tech">

            <span>Angular</span>
            <span>REST APIs</span>
            <span>Frontend Architecture</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;