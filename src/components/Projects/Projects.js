import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
  console.log(portfolio);

  const renderPortfolio = (portfolio) => {
    return (
    <>
        {portfolio.map((port, idx) => {
          const projectData = { ...port, id: idx };
          console.log(projectData);
          return (

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={projectData.image}
                  isBlog={false}
                  title={projectData.description}
                  description={projectData.description}
                  ghLink={projectData.github}
                  demoLink={projectData.url}
                />
              </Col>
          );
        })}
</>
    );
  };

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {renderPortfolio(portfolio)}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
