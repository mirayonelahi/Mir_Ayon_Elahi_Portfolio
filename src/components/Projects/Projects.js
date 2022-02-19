import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tug from "../../Assets/Projects/tug.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import barber from "../../Assets/Projects/Barbershop.jpeg";
import battle from "../../Assets/Projects/Battleship.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tug}
              isBlog={false}
              title="Tug Of Logic"
              description="Applied research project where developed a philosophy game. The game was created by a Douglas college professor who was our client while building the game.The game was tested and deployed in herokuapp and it is a live project used by our client in his class setting."
              link="https://github.com/mirayonelahi/TugOfLogic"
              livelink="https://www.youtube.com/watch?v=wQxHfl3zA04&t=626s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barber}
              isBlog={false}
              title="BarberShop App"
              description="This is final project of course work CSIS-4280 Special Topics in Web/Mobile App Development. Kotlin android is applied for frontend, mongo dB used as database and python flask used for back end.Implemented EmailNotification messaging service using AWS."
              link="https://github.com/mirayonelahi/BarbershopApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battle}
              isBlog={false}
              title="BattleShip Game"
              description="This is final project of course work CSIS 3275-Software Engineering. Implemented javafx, html and css to develop this game."
              link="https://github.com/mirayonelahi/BattleShipProject"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> 
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
