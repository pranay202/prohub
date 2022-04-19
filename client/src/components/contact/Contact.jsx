import React from "react";
import { Container, Row } from "react-bootstrap";
import {BsTelephoneFill as Phone } from "react-icons/bs";
import {MdEmail as Mail} from "react-icons/md";
import {FaMapMarkerAlt as Map} from "react-icons/fa"
import "./Screen.css";

function Contact() {
  return (
              <>
              <section className="contact">
                <div className="content">
                    <h2>Contact Us</h2>
                    <p>If you have any queries about provided details, we are here to help you. Here's how to get in touch.</p>
                </div>

                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><Map/></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>SBJITMR, Yerla,<br/>Savner Road, Nagpur</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon"><Phone/></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+91 9011694130</p>
                                <p>0712-475-6094</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon"><Mail/></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>prohub@sbjit.edu.in</p>
                            </div>
                        </div>
                    </div>

                    <div className="ContactForm">
                        <form>
                        <h2>Send message</h2>
                        <div className="inputBox">
                            <span>Enter your name</span>
                            <input type="text" name="name" placeholder="Enter your name"required="required"/>
                        </div>
                        <div className="inputBox">
                            <span>Enter Email</span>
                            <input type="text" name="" placeholder="Enter Email" required="required"/>
                        </div>
                        <div className="inputBox">
                            <span>Type your Message</span>
                            <textarea type="text" placeholder="Type your message." required="required"/>
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="submit" value="Send"/>
                        </div>
                        </form>
                    </div>
                  {/* <div className="image-box">
                    <img src="contact.png" alt="" /> 
                  </div>
                  <form action="#">
                    <div className="topic">Send us a message</div>
                    <div className="input-box">
                      <input type="text" required />
                      <label>Enter your name</label>
                    </div>
                    <div className="input-box">
                      <input type="text" required />
                      <label>Enter your email</label>
                    </div>
                    <div className="input-box">
                      <input type="text" required />
                      <label>Enter your message</label>
                    </div>
                    <div className="input-box">
                      <input type="submit" value="Submit" />
                    </div>
                  </form> */}
              </div>
            </section>
              </>
  );
}

export default Contact;
