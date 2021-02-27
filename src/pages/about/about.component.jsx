import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profileImg.jpg";
import './about.style.css';
import Button from 'react-bootstrap/Button'


const About = () => {
    return (
      <div id="about">
          <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
              <Row className="pt-3 pb-5 align-items-center">
                  {/* profile picture */}
                  <Col xs={12} md={6}>
                      <Row className="justify-content-center mb-2 mr-2">
                         <Image className="profile justify-content-end" alt="profile image" src={Profile} thumbnail fluid />
                      </Row>
                  </Col>

                  {/* brief about me */}
                  <Col xs={12} md={6}>
                      <Row className="align-items-start p-2 my-details rounded">
                        Hi there! I am <strong>&nbsp;Nurudeen Olanrewaju Bada</strong>
                        <br />A coding enthusiast and a Coach, I am a Web Developer with React.js, Redux, Express.js, 
                        Node.js, and MongoDB as my tech stack.
                        <br />
                        I was introduced to the world of Computer Programming in 2019, the idea of becoming a builder and
                        not a user was fascinating felt like i finally found where I belong. I decided to change career so 
                        I took up some online courses to teach myself the basics of computer programming then later went for bootcamps.
                        <br />
                        Presently I work with a group of developers at <a href="https://www.jbitss.com" target="_blank" rel="noopener noreferrer">Jbitss Tech</a>
                        creating different types of Web Apps for our satisfied clients.<br />  
                        My goal is always driven towards providing amazing experience with the best level of quality and service 
                        to them.
                        <br />
                        Along with that, I also help people as a COACH on their journey to becoming a professional web developer. 
                        <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                        <br /> <br />
                      </Row>

                      <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div>
                                <a href="#contact">
                                    <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/badaDev" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-dark">
                                    GitHub
                                </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/nurudeen-bada-457a43200/" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-info">
                                    LinkedIn
                                </Button>
                                </a>
                            </div>
                        </Col>
                      </Row>
                  </Col>
              </Row>
            </Container>
          </div>
      </div>
    );
  }
  
  export default About;
  