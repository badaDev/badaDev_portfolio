import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//stylesheet
import "./contact.style.css";


const Contact = () => {
    return(
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                    <div className="m-2">
                    <a href="badadev2020@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-danger" title="badadev2020@gmail.com" className="my-btn">
                        <i className="fas fa-envelope-square"></i> Email Me
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.linkedin.com/in/nurudeen-bada-457a43200/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-primary" title="Visit my LinkenIn" className="my-btn">
                        <i className="fab fa-linkedin"></i> LinkedIn
                        </Button>
                    </a>
                    </div>
                    
                    <div className="m-2">
                    <a href="https://github.com/badaDev" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-dark" title="My other projects" className="my-btn">
                        <i className="fab fa-github-square"></i> GitHub
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-info" title="Tweets are welcomed!" className="my-btn">
                        <i className="fab fa-twitter"></i> Twitter
                        </Button>
                    </a>
                    </div>
                </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact;