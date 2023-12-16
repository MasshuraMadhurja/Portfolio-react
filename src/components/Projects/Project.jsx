import React from 'react'
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = (props) => {
    const { img, disc,title,github,demo} = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>{title}</h1>
            <p>{disc}
            <div className="project-link">
            <a href={github}><FaGithub /></a>
            <a href={demo}><FaExternalLinkAlt /></a>
            </div>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -15rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(8,135,103, 0.95),rgba(1,190,150, 2.0));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            div{
                color:#fff;
                padding-top:5px;
                display:flex;
                justify-content: center;
                gap:10px;
                font-size: 14px;
                

                a{
                margin-left: 0.4rem;
                color: #4e5156;
                transform: scale(1);
                transition: transform 0.1s ease;
                :hover{
                    color:#fff;
                    transform: scale(1.1);
            
                }
            }
            }
            
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
        

    }

`