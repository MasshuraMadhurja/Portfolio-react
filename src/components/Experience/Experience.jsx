/* eslint-disable no-unused-vars */
import React from "react";
import "./Experience1.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import styled from "styled-components";

export default function Experience() {
  return (
    <div className="edu-ex" id="journey">
      {/* <!-- education section design --> */}

      <section className="education" id="education">
        <Zoom>
          <h2 className="heading">
            My <span>Journey</span>
            <span className="animate scroll"></span>
          </h2>
        </Zoom>
        <div className="education-row">
          <div className="education-column education-col">
            <h3 className="title">
              Education<span className="animate scroll"></span>
            </h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <FaCalendarAlt /> Passing Year: February, 2023
                  </div>
                  <h3>Khulna University of Engineering & Technology</h3>
                  <h2>B.Sc. in Electronics and Communication Engineering </h2>
                  <p>CGPA 3.46/4.00</p>
                  <p>
                    <FaLocationDot /> Khulna, Bangladesh
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <FaCalendarAlt /> Passing Year: 2017
                  </div>
                  <h3>Shaheed Bir Uttam Lt. Anwer Girls’ College</h3>
                  <h2>HSC</h2>
                  <p>GPA 5.00</p>
                  <p>
                    <FaLocationDot /> Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <FaCalendarAlt /> Passing Year: 2015
                  </div>
                  <h3>Susang Adorsha Bidyaniketon </h3>
                  <h2>SSC</h2>
                  <p>GPA 5.00</p>
                  <p> </p>
                  <p>
                    <FaLocationDot /> Netrokona, Bangladesh
                  </p>
                </div>
              </div>

              <span className="animate scroll"></span>
            </div>
          </div>

          <div className="education-column experience-col">
            <h3 className="title">
              Experience<span className="animate scroll"></span>
            </h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <FaCalendarAlt /> 15 April, 2023- 14 July, 2023
                  </div>
                  <h3>Female Intern under BeLISAC project</h3>
                  <h2>Bangladesh Research and Education Network (BdREN)</h2>
                  <p>
                    I've gained hands-on experience on configuring routers,
                    virtualization, Proxmox, Zoom setup, storage & backup
                    systems, and data center operations.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <FaCalendarAlt /> May, 2023- June,2023
                  </div>
                  <h3>Web Development and Design Internship</h3>
                  <h2>The Sparks Foundation</h2>
                  <p>
                    Through this remote internship I developed a banking website
                    using HTML, CSS, ReactJS & MongoDB
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <FaCalendarAlt /> 2019 - 2020
                  </div>
                  <h3>Data Science and Business Analytics Intern</h3>
                  <h2>The Sparks Foundation</h2>
                  <p>
                    Through this internship, I gained experience in Python, Data
                    Science methodologies, collaborative teamwork, and project
                    execution.
                  </p>
                </div>
              </div>

              <span className="animate scroll"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
