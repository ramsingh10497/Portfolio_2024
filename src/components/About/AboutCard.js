import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ram Singh </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I was last employed as a software developer at Webspero.
            <br />
            I have completed B.Tech from MAKAUT university, West Bengal
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> GeoPolitics
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain fundamental reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
