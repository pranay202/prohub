import React from "react";
import "./Screen.css";

function Home() {
  
  return (
    <>

     {/* <h1>This is home page</h1> */}

    {/* <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href="#">Pro<span>Hub</span></a>
        </div>
        <ul className="menu">
          <li><a href="#home" className="menu-btn">Home</a></li>
          <li><a href="#about" className="menu-btn">About</a></li>

          <li><a href="#projects" className="menu-btn">Projects</a></li>
          <li><a href="#contact" className="menu-btn">Contact</a></li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav> */}
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Welcome to,</div>
                <div className="text-2">ProHub</div>
                <div className="text-3">The Project Library</div>
                <a href="/projects">Explore</a>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;
