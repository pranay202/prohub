import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

function Home() {
  
  return (

    // <h1>This is home page</h1>
    <Container>

    {/* <nav class="navbar">
      <div class="max-width">
        <div class="logo">
          <a href="#">Pro<span>Hub</span></a>
        </div>
        <ul class="menu">
          <li><a href="#home" class="menu-btn">Home</a></li>
          <li><a href="#about" class="menu-btn">About</a></li>

          <li><a href="#projects" class="menu-btn">Projects</a></li>
          <li><a href="#contact" class="menu-btn">Contact</a></li>
        </ul>
        <div class="menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </nav> */}

    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to,</div>
                <div class="text-2">ProHub</div>
                <div class="text-3">The Project Library</div>
                <a href="/projects">Explore</a>
            </div>
        </div>
    </section>
    </Container>
  );
}

export default Home;
