import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

import {FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

function About() {
  return (
    <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>ProHub-The Project Library</h3>
					<p>An online integrated 
platform to bring all the projects done by the 
students in the University. The information on this platform will help you in the learning process as we have provided here the projects links, 
codes, documentation links,etc. This will also help students 
to know which projects are already taken up in their college.</p>
					<div className="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div className="social">
					<a href=""><i className="fab fa-facebook-f"><FaFacebook/></i></a>
					<a href=""><i className="fab fa-twitter"><FaTwitter/></i></a>
					<a href=""><i className="fab fa-instagram"><FaLinkedin/></i></a>
				</div>
			</div>
			<div className="image-section">
				<img src="images/why-us.jpg" />
        {/* <div></div> */}
			</div>
		</div>
	</div>
  );
}

export default About;
