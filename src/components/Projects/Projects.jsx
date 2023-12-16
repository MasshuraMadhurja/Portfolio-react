import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="green">Projects</span></h1>
            <p>My projects make use of a vast variety of latest technology tools. My best experience is to 
                create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
        margin-bottom: -5rem;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``