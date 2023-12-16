/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Header from "./components/Banner/Header";
// eslint-disable-next-line no-unused-vars
import Heading from "./components/Heading";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import skills from "./components/Skills/skills";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import Experience from "./components/Experience/Experience";
import { Zoom } from "react-awesome-reveal";
import "./App.css";

// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />

        {/* <section id="skills">
        <Heading firstWord="Skills" secondWord="&Tools" />
        <div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      </section> */}

        <section id="skills">
          <Zoom>
            <h1>
              Skills <span className="green">& Tools</span>
            </h1>
          </Zoom>
          <motion.div
            className="skill-map"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={skillVariants}>
                <Skill skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </LightColor>
    
        <Experience />
   
      {/* <Clients /> */}
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
// eslint-disable-next-line no-unused-vars
const Section = styled.section`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
