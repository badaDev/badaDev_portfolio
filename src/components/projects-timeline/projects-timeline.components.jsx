import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

//stylesheet
import "./projects-timeline.style.css";

//accordion
import Accordion from "react-bootstrap/Accordion";
//card
import Card from "react-bootstrap/Card";
//image
import Image from "react-bootstrap/Image";

//project logo
import MY_QUIZAPP from "../../assets/img/projects/quiz-app.jpg";
import ONIDIRI from "../../assets/img/projects/onidiri.jpg";

//skills used for projects
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";


const Projects = () => {
    return(
        <div id="projects">
             <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
             <Timeline>
                 <Events>
                     {/* Project: React Quiz App */}
                    <ImageEvent
                        date="10/12/2020"
                        className="text-center"
                        text="React Quiz App"
                        src={MY_QUIZAPP}
                        alt="React Quiz App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Quiz App created with React, users can take the quiz from any subject
                                                get their scores at the end of each quiz
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                <li>Keeps track of correct answers and wrong answers</li>
                                                <li>Displays final score</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_HTML5}
                                                            alt="HTML 5"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_CSS3}
                                                            alt="CSS 3"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_REACT}
                                                            alt="React"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_REACT_BOOTSTRAP}
                                                            alt="Material-UI"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        ></Image>{" "}
                                                        React Bootstrap
                                                        </span>
                                                    </li>                                            
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                href="#"
                                target="_blank"
                                >
                                SEE LIVE
                                </UrlButton>
                                <UrlButton
                                href="#"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                     {/* Project: Onidiri Mobile Salon */}
                     <ImageEvent
                        date="20/01/2021"
                        className="text-center"
                        text="Onidiri Mobile Salon"
                        src={ONIDIRI}
                        alt="Onidiri Mobile Salon"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a mobile hair salon website created with Express js
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                <li>It allows users to book appointment for hair care services</li>
                                                <li>Users can also send messages directly to the admin through a contact form</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_HTML5}
                                                            alt="HTML 5"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_CSS3}
                                                            alt="CSS 3"
                                                            rounded
                                                            className="image-style m-1"
                                                        ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_BOOTSTRAP}
                                                            alt="Bootsrap"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        ></Image>{" "}
                                                        Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_JAVASCRIPT}
                                                            alt="Javascript"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        ></Image>{" "}
                                                        Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_NODE_JS}
                                                            alt="Node JS"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        ></Image>{" "}
                                                        Node JS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image
                                                            src={L_EXPRESS}
                                                            alt="Javascript"
                                                            rounded
                                                            className="image-style1 m-1"
                                                        ></Image>{" "}
                                                        Express JS
                                                        </span>
                                                    </li>                                            
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                href="#"
                                target="_blank"
                                >
                                SEE LIVE
                                </UrlButton>
                                <UrlButton
                                href="#"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                 </Events>
             </Timeline>
        </div>
    )
}

export default Projects;