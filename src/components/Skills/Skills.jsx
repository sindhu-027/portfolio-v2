import "./Skills.css";

function Skills() {
  return (

    <section className="skills" id="skills">

      <p className="section-tag">
        Skills
      </p>

      <h2>
        Technologies I Work With
      </h2>

      <div className="skills-grid">

        {/* FRONTEND */}

        <div className="skill-card">

          <h3>
            Frontend
          </h3>

          <div className="skill-items">

            <span>React</span>
            <span>Angular</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Tailwind CSS</span>

          </div>

        </div>

        {/* BACKEND */}

        <div className="skill-card">

          <h3>
            Backend
          </h3>

          <div className="skill-items">

            <span>Node.js</span>
            <span>Express.js</span>
            <span>Java</span>
            <span>C#</span>
            <span>.NET Core</span>
            <span>REST APIs</span>

          </div>

        </div>

        {/* DATABASE */}

        <div className="skill-card">

          <h3>
            Database
          </h3>

          <div className="skill-items">

            <span>MongoDB</span>
            <span>MySQL</span>
            <span>PostgreSQL</span>

          </div>

        </div>

        {/* SECURITY & TOOLS */}

        <div className="skill-card">

          <h3>
            Security & Tools
          </h3>

          <div className="skill-items">

            <span>JWT</span>
            <span>OWASP Top 10</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Cloud Basics</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;