import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tug from "../../Assets/Projects/tug.png";
import warehouse from "../../Assets/Projects/warehouse.png";
import barber from "../../Assets/Projects/Barbershop.jpeg";
import battle from "../../Assets/Projects/Battleship.png";
import inventory from "../../Assets/Projects/inventory.png";
import food from "../../Assets/Projects/food.png";

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
              imgPath={inventory}
              isBlog={false}
              title="Cloud-based liquidation inventory management and pricing application"
              description="Cloud-based liquidation inventory management and pricing application system is a proprietary warehouse management system. This application was specifically tailored for the purpose of managing liquidation warehouses, inventories, handle shipments, deliveries, logistics, manage stocks and so on."
              link=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouse}
              isBlog={false}
              title="Cloud-based warehouse management system"
              description="Cloud-based warehouse management system is a proprietary warehouse management system of Liquidations Plus. This application was specifically tailored for the purpose of managing liquidation warehouses, and handle shipments, deliveries, logistics, manage stocks and so on. "
              link=""
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Review"
              description="Food review website built by me using Javascript , Jquery, Php , Laravel, Mysql. It's a review website where people can give review of different foods/restaurants and see others."
              link=""
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

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
