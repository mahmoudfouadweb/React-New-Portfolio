import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import { getDocs, collection } from "firebase/firestore/lite";
import { db } from "../../firebase";

function Projects() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  };
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the latest projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {portfolio.map((port, idx) => (
            <Col key={idx} md={4} className="project-card">
              <ProjectCard
                imgPath={port.image}
                isBlog={false}
                title={port.description}
                description={port.description}
                ghLink={port.github}
                demoLink={port.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
