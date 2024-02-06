
import React, { useState } from 'react';
import './About.css';
import photo from '../../assets/Rectangle 1.png'
import education from '../../assets/education.png'
import arrow from '../../assets/arrow.png'
import exp from '../../assets/experience.png'
import Technology from '../technology/Technology';
import Project from '../projectitem/Project';

const About = () => {
  
  return (
    <div>
    <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container">
              <img src= {photo} alt="Profile picture" className="about-pic" />
            </div>
            <div className="about-details-container">
              <div className="text-container">
                <p>
                  Hello, and welcome to my portfolio! My name is <b>Shailendra Mahadule</b> , and I am currently pursuing my education in the field of Information Technology. I completed my diploma at Government Polytechnic Nagpur and am currently enrolled at Walchand College of Engineering Sangli, where I am further honing my skills in IT. Beyond academics, I am a passionate individual with diverse interests. I find joy in exploring various aspects of life, and one of my key hobbies is investing in the stock market, where I continuously strive to expand my financial knowledge.
                </p>
              </div>
              <div className="about-containers">
                <div className="details-container">
                  <img src={education} alt="Education icon" className="icon" />
                  <h3>Education</h3>
                  <p>Gujarati National High School, Gondia  <h4> 84%</h4> </p>
                  <p>Government Polytechnic, Nagpur        <h4> 92.85%</h4></p>
                  <p>Walchand College of Engineering,Sangli <h4> 8.22</h4></p>
                  {/* <p>B.Sc. Bachelors Degre<br />M.Sc. Masters Degree</p> */}
                </div>
                <div class="details-container">
              <img
                src={exp}
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>MERN stack Development</p>
              <p>Android Development (Flutter)</p>
              <p>Leader of Project Team</p>


            </div>
              </div>
            </div>
          </div>
          <img src={arrow} alt="Arrow icon" className="icon arrow" onclick="location.href='./#experience'" />

        

        </section>
        
       
    





</div>




  );
};

export default About;
