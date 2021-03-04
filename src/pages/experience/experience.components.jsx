import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_JBITSS from "../../assets/img/experience/jbitss-logo.png";
import Tilt from "react-tilt";
import "./experience.style.css";



const Experience = () => {
    return (
      <div id="experience">
          <h1 className="pt-3 text-center font-details-b pb-3 ">EXPERIENCE</h1>
          <Jumbotron className="jumbo-style">
            <Container>
              <Tilt options={{ max: 25 }}>
                <Card>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize" src={L_JBITSS} alt="Jbitss logo" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center">Web Developer</Card.Title>
                    </div>
                    <div>
                      <Card.Text className="text-center style">
                        <strong> Description </strong>
                        <ul className="text-left text-muted">
                          <li><strong>Created &amp; upgraded</strong> different highlights with adaptability choice across web application.</li>
                          <li><strong>Provided</strong> application maintenance. 
                          </li>
                          <li><strong>Performed</strong> CRUD operations on various data sets to load/ eliminate data as 
                          indicated by clients necessities.</li>
                          <li><strong>Created</strong> mobile friendly designs depending on clients request</li>
                        </ul>
                        
                        
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </Container>
          </Jumbotron>
        
      </div>
    );
  }
  
  export default Experience;
  