import React from "react";
// import { Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

import {BsTelephoneFill as Phone } from "react-icons/bs";
import {MdEmail as Mail} from "react-icons/md";
import {FaMapMarkerAlt as Map} from "react-icons/fa"
import "./Screen.css";

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_jtl7eza",
      "template_np0orzp",
      e.target,
      "joixUiaXw316xr3lq"
    ).then(response => {
      console.log(response);
      console.log("Success!");
      alert("Message sent Successfully!");
      window.location.reload();
    }).catch(err => {
      console.log(err);
    })
  }

  return (
              <>
              <section className="contact">
                <div className="content">
                    <h1>CONTACT US</h1>
                    <p>If you have any queries about provided details, we are here to help you. <br/> Here's how to get in touch.</p>
                </div>

                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><Map/></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>SBJITMR, Yerla,<br/>Saoner Road, Nagpur</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon"><Phone/></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+91 9011694130</p>
                                <p>+91 8855953408</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon"><Mail/></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>pranaykharabe20@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="ContactForm">
                        <form onSubmit={sendEmail}>
                        <h2>Send message</h2>
                        <div className="inputBox">
                            <input type="text" name="name" placeholder="Enter your name"required="required"/>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="user_email" placeholder="Enter Email" required="required"/>
                        </div>
                        <div className="inputBox">
                            <textarea type="text" name="message" placeholder="Type your message." required="required"/>
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
