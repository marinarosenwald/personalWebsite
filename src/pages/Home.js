import React from "react"; 
import me from "../photos/me.jpeg"; 
import LI from "../photos/linkedin.svg";
import EI from "../photos/emailIcon.png"; 
import GI from "../photos/github.svg";
import "./HomeStyle.css";
import "../components/displayBox.css"; 

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

function Home() {
  return (
    <div id="Home">
      <div className="hero-section">
        <div className="hero-content">
          <div id="photo">
            <img src={me} alt="Marina Rosenwald" className="profileImg" />
          </div>
          <div className="hero-text">
            <h1>Marina Rosenwald</h1>
            <div className="title-container">
              <h2>Machine Learning Engineer</h2>
              <div className="grad-status">
                <span className="grad-badge">Graduate Student</span>
                <p>Computer Science & Software Engineering</p>
              </div>
            </div>
            <p className="hero-description">
              Passionate about leveraging AI/ML to solve real-world challenges while pursuing advanced studies in Computer Science.
            </p>
            <div className="hero-links">
              <a href='https://www.linkedin.com/in/marina-rosenwald/' className="hero-link">
                <img src={LI} alt="LinkedIn" className="hero-icon" />
                LinkedIn
              </a>
              <a href="mailto:marinarosenwald@gmail.com" className="hero-link">
                <img src={EI} alt="Email" className="hero-icon" />
                Email
              </a>
              <a href='https://github.com/marinarosenwald' className="hero-link">
                <img src={GI} alt="GitHub" className="hero-icon" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <Box className="boxH">
          <div className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
              <p>
                I am a Machine Learning Engineer by day and a dedicated Master's student in Computer Science and Software Engineering by night, with a specialized focus on Artificial Intelligence and Machine Learning.
              </p>
              <p>
                Driven by an insatiable curiosity for technology, I strive to leverage my expertise in AI/ML to address complex, real-world challenges and contribute meaningfully to the technological landscape.
              </p>
              <p>
                Beyond academia and work, I enjoy exploring the Pacific Northwest's diverse trails, engaging in snowboarding adventures, and participating in the local tech community. I am also passionate about volunteering with nonprofits that aim to make the outdoors more accessible for individuals with disabilities.
              </p>
              <p>
                I am excited about the endless possibilities technology offers and am eager to contribute to the future of Machine Learning.
              </p>
            </div>
          </div>
        </Box>

        <Box className="boxH">
          <div className="skills-section">
            <h2>Technical Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Machine Learning</h3>
                <ul>
                  <li>Deep Learning</li>
                  <li>Neural Networks</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Programming</h3>
                <ul>
                  <li>Python</li>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Home;
