import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahmoud Fouad </span>
            <br />I was born and raised in the city of
            <span className="purple"> Cairo, Egypt.</span>
            <br />
            <span>
              and have always had a passion for learning and
              self-improvement.Growing up, I was always interested in science
              and technology, <br />
            </span>
            <br />
            Apart from coding, some other activities that I love to do!
           
          </p>
          <p style={{ textAlign: "justify" }}>
            and would spend hours reading about the latest advancements in these
            fields. This passion eventually led me to pursue a degree in
            Computer Science, which I am currently work as an officer as a web
            developer I thenkfull to my freind
            <span className="purple"> Tamer.</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> healthy lifestyle by eating nutritious food
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I hope to use my education and skills to make a positive impact in
            the world"{" "}
          </p>
          <footer className="blockquote-footer">Mahmoud</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
