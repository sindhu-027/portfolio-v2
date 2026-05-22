import "./Hero.css";

function Hero() {
  return (

    <section className="hero" id="home">

      <div className="hero-left">

        <p className="hero-tag">
          Software Developer
        </p>

        <h1>
          Building Applications with
          <span className="gradient-text">
            Modern
          </span>
          Technologies
        </h1>

        <p className="hero-description">
          Passionate Software Developer focused on building secure and scalable modern applications
          with clean user experiences and strong backend systems.
        </p>

        <div className="hero-buttons">

          <a href="#projects">

            <button>
              View Projects
            </button>

          </a>

        </div>

        <div className="voice-intro">

          <p>
            🎤 Hear My Introduction
          </p>

          <audio controls>

            <source
              src="/audio/intro.mp3"
              type="audio/mp3"
            />

          </audio>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/images/me.png"
          alt="Sindhu Sekar"
        />

      </div>

    </section>
  );
}

export default Hero;