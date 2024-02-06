import React from 'react'
import './Footer.css'
import linked from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import leetcode from '../../assets/leetcode_logo_icon_145113.png'
import x_logo from '../../assets/x_logo.jpg'

const Footer = () => {

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

            <footer>
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>

                        <ul className="nav-links">
                        <div id="socials-container">
                            <img src={linked} alt="My LinkedIn profile" className="icon" onClick={redirectToLinkedIn} />
                            <img src={github} alt="My Github profile" className="icon" onClick={redirectToGithub} />
                            <img src={leetcode} alt="My LeetCode profile" className="icon" onClick={redirectToLeetCode} />
                            <img src={x_logo} alt="My Twitter profile" className="icon" onClick={redirectToTwitter} />
                        </div>
                        </ul>
                    </div>
                </nav>
                <p>Copyright © Shailendra-08. All Rights Reserved.</p>
            </footer>

        </div>
    )
}

export default Footer
