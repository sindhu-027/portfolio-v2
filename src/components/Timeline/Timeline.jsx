import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline" id="journey">

      <p className="section-tag">
        Journey
      </p>

      <h2>
        My Growth Timeline
      </h2>

      <div className="timeline-container">

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span className="timeline-year">
              🎓 2024
            </span>

            <h3>
              BE Computer Science Engineering
            </h3>

            <p>
              Completed Bachelor of Engineering in Computer Science
              with strong interest in full stack development,
              scalable applications, and modern web technologies.
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span className="timeline-year">
              💼 2025
            </span>

            <h3>
              Infosys Internship 6.0
            </h3>

            <p>
              Worked on secure MERN stack application development
              with focus on authentication, REST APIs,
              backend systems, and scalable workflows.
            </p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span className="timeline-year">
              🚀 Current Focus
            </span>

            <h3>
              Full Stack & Secure Development
            </h3>

            <p>
              Exploring scalable backend systems,
              OWASP security practices, cloud technologies,
              and advanced full stack development.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Timeline;