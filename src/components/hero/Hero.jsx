import React from 'react'
import './Hero.css'

import photo from '../../assets/ayush portfolio.png'
import resume from '../../assets/Shailendra_Mahadule_CV (4).pdf'
import linked from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import leetcode from '../../assets/leetcode_logo_icon_145113.png'
import x_logo from '../../assets/x_logo.jpg'




const Hero = () => {

  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/shailendra-mahadule-96955b200/';
  };

  const redirectToGithub = () => {
    window.location.href = 'https://github.com/Shailendra-08';
  };

  const redirectToLeetCode = () => {
    window.location.href = 'https://leetcode.com/Shailendra_08/';
  };

  const redirectToTwitter = () => {
    window.location.href = 'https://twitter.com/Shailen64591797/';
  };
  return (
    <div>

      <section id="profile">
        <div className="section__pic-container">
          <img src={photo} alt="Shailendra Mahdule profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Shailendra Mahadule</h1>
          <p className="section__text__p2">Backend Developer | Django | MERN</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open(resume)}>
              Download CV
            </button>
            <button className="btn btn-color-1" onclick="location.href='./#contact'">
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src={linked} alt="My LinkedIn profile" className="icon" onClick={redirectToLinkedIn} />
            <img src={github} alt="My Github profile" className="icon" onClick={redirectToGithub} />
            <img src={leetcode} alt="My LeetCode profile" className="icon" onClick={redirectToLeetCode} />
            <img src={x_logo} alt="My Twitter profile" className="icon" onClick={redirectToTwitter} />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero
