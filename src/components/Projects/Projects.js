import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";
import innerjoyImg from "../../Assets/Projects/innerjoy.png";
import unoCareerImg from "../../Assets/Projects/unocareer.png";

const projects = [
  {
    imgPath: innerjoyImg,
    title: "Innerjoy",
    description:
      "Our Aim is to bridging the school behavioral health gap with our fun, engaging solutions that create lasting change and promote emotional and mental well-being in students.",
    ghLink: "",
    isBlog: "",
    demoLink: "https://innerjoyed.com",
  },
  {
    imgPath: unoCareerImg,
    title: "Unocareer",
    description:
      "Our vision to create a cloud platform that lets its smart ecosystem participants to learn, teach, test, monitor, hire and accomplish their professional needs efficiently",
    ghLink: "",
    isBlog: "",
    demoLink: "https://www.unocareer.com",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {projects?.map((project) => (
          <ProjectCards {...project} />
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
