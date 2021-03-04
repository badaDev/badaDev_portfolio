import './App.css';

//import components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from './components/my-carousel/my-carousel.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container'
import BgImage from './assets/img/parallex/background.webp'
import Skills from './pages/skills/skills.components';
import Experience from './pages/experience/experience.components';
import Projects from './components/projects-timeline/projects-timeline.components';


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      <div>
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <Skills />
            </Slide>
          </Container>
        </div>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>

      <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <Projects />
            </Slide>
          </Container>
        </div>
    </div>
  );
}

export default App;
