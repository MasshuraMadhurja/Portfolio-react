import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import img1 from "../../assets/project-img/fitness.jpeg";
import img2 from "../../assets/project-img/trip.jpeg";
import img3 from "../../assets/project-img/snakegame.jpeg";
import img4 from "../../assets/project-img/weather.jpeg";
import img5 from "../../assets/project-img/taskList.jpeg"

let data = [
    {
        img : img1,
        disc : "React-based FitnessClub SPA with smooth navigation, responsive design, Framer Motion animations, and Email JS for communication.",
         title:"FitnessClub Website",
         github:"https://github.com/MasshuraMadhurja/FitnessClub-Website-ReactJS",
         demo:"https://fitnessclub-website-reactjs.netlify.app/"
      },
      {
        img : img2,
        disc : "A responsive multipage travel website created with HTML, CSS  & ReactJS ",
         title:"Travel website",
         github: "https://github.com/MasshuraMadhurja/Travel-website-ReactJS",
         demo:"https://trippy-reactjs.netlify.app/"
      },
    {
      img : img3,
      disc : "Developed by HTML, CSS & JavaScript. Players control the snake with arrow keys, earning points by consuming food until hitting boundaries or self-biting. ",
       title:"Classic Snake Game",
       github: "https://github.com/MasshuraMadhurja/classic-snake-game",
       demo:"https://classic-snake-game-js.netlify.app/"
    },
    {
      img : img4,
      disc : "Built with CSS, HTML, Vanilla JavaScript. Utilizes Open Weather Map API for real-time weather data via modern Fetch API.",
       title:"Weather App",
       github: "https://github.com/MasshuraMadhurja/classic-snake-game",
       demo:"https://github.com/MasshuraMadhurja/weather-app"
    },
    {
      img : img5,
      disc : "Built with CSS, HTML & Vanilla JavaScript  enabling task creation, date/time selection, and task management with edit and delete functionalities.",
       title:"Task List",
       github: "https://github.com/MasshuraMadhurja/TaskList",
       demo:"https://my-tasklist1.netlify.app/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`