import "./RecruiterMode.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import { useEffect, useState } from "react";

function RecruiterMode() {

  const [hideDock, setHideDock] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const contactSection =
        document.getElementById("contact");

      if (!contactSection) return;

      const rect =
        contactSection.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        setHideDock(true);
      } else {
        setHideDock(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <div
      className={`recruiter-mode ${
        hideDock ? "hide-recruiter" : ""
      }`}
    >

      <a
        href="https://github.com/sindhu-027"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a href="mailto:ssindhu2502@gmail.com">
        <FaEnvelope />
      </a>

    </div>
  );
}

export default RecruiterMode;