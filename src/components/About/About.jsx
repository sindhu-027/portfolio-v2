import "./About.css";

function About() {
  return (

    <section className="about" id="about">

      <div className="about-left">

        <p className="section-tag">
          About Me
        </p>

        <h2>
          Turning Ideas Into Real World Applications
        </h2>

        <div className="about-content">

          <p>
            I began my journey with enthusiasm for web
            development and gradually explored full stack
            technologies, backend systems, and secure
            application development.
          </p>

          <p>
            I enjoy transforming ideas into modern applications
            with intuitive interfaces, efficient system design, 
            and seamless user experiences while continuously expanding 
            my technical knowledge. 

          </p>

          <p>
            Currently, I am enhancing my expertise in
            backend development, application architecture, 
            cloud technologies, and secure software development practices 
            through real-world projects and exploring modern development practices.
          </p>

        </div>

      </div>

      <div className="about-right">

        <div className="about-highlight-box">

          <h3>
            Highlights
          </h3>

          <span>
            Infosys Internship 6.0
          </span>

          <span>
            Team Lead Experience
          </span>

          <span>
            Building Real-World Applications
          </span>

        </div>

      </div>

    </section>
  );
}

export default About;