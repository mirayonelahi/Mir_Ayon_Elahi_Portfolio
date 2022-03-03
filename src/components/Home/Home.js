import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import About from "../About/About";
import Particle from "../Particle";
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Social from "./Social";
import Type from "./Type";


function Home() {
  return (
    <section>
        <Home2 />
        <About/>
        <Projects/>
        <Social />
    
  
    </section>
  );
}

export default Home;
