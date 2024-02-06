// 
import React from 'react';
import './Project.css';
import pro1 from '../../assets/project-1.png';
import pro2 from '../../assets/foodorder.jpg';
import pro3 from '../../assets/photo studio.jpg';
import arrow from '../../assets/arrow.png';

const Project = () => {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={pro1} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Mess Management</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/Shailendra-08/Mess-Deployment'}
                >
                  Github
                </button>
                {/* <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button> */}
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={pro2} alt="Food-Ordering" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Food-Ordering Website</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/Shailendra-08/Food-Delivery'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={pro3} alt="Photo Studio Website" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Photo Studio Website</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/Shailendra-08/Photostudio'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://legendary-starburst-12e24e.netlify.app/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
      </section>
    </div>
  );
}

export default Project;
