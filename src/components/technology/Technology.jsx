import React from 'react'
import './Technology.css'
import checkimg from '../../assets/checkmark.png'
import arrow from '../../assets/arrow.png'


const Technology = () => {
  return (
    <div>
    <section id="experience">
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="experience-sub-title">Programming Language</h2>
                <div className="article-container">
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>C/C++</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Python</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Java</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Basic</p>
                    </div>
                  </article>
             
                </div>
              </div>
              <div className="details-container">
                <h2 className="experience-sub-title">Web Technologies</h2>
                <div className="article-container">
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>HTML</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>CSS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Express</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>MongoDB</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>PostgreSQL</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Node JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Git/Github</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Django</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkimg} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Docker</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <img src={arrow} alt="Arrow icon" className="icon arrow" onclick="location.href='./#projects'" />
        </section>
      
    </div>
  )
}

export default Technology
