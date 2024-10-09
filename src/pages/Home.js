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
    <div id="Home" >
    <div id="photo">
      <img src={me} alt="me" className="profileImg" />
    </div>
    <br />
    <Box className="boxH">
    <h2 className="center" style={{ margin: 5, fontSize: 30,  color: 'rgb(194, 125, 15)',}}>Marina Rosenwald</h2>
      <p style={{margin: 8, fontSize: '1.4rem', }}>

      Hello, I'm Marina Rosenwald. I am currently pursuing a Master's degree at the University of Washington, focusing on Artificial Intelligence and Machine Learning. Concurrently, I am gaining hands-on experience as a Development/GIS/Data Science Systems, Data and Technology Intern, delving into the practical applications and nuances of Computer Vision.
      <br /><br />
      My academic journey is driven by an insatiable curiosity for technology and its potential to solve multifaceted problems. I am dedicated to leveraging my skills in AI/ML to tackle real-world challenges and contribute meaningfully to the technological landscape.
      <br /><br />
      Outside of academia and work, I find myself exploring the many trails the Pacific Northwest has to offer, snowboarding, volunteering with nonprofits aiming to make the outdoors more accessible for those with disabilities, and experimenting in the kitchen. 
      <br /><br />
      I am excited about the possibilities technology offers and eager to contribute to the future of Artificial Intelligence. 
      </p>
    </Box>

    <br />

    <Box className="boxH">
      <div id="contact">
      <h2 style={{color: 'rgb(194, 125, 15)',}}>
        Contact me
      </h2>
      </div>
    </Box>

    <br />
    <div className="row">

    <div className="column">
        <Box className="boxList">
        <a href='https://www.linkedin.com/in/marina-rosenwald/'>
            <div className='DinsideBox'>
                  <img src={ LI } alt="LinkedInIcon" className="Dicon"></img>
              <div className="DinsideText">
              <p style={{color: 'rgb(194, 125, 15)', fontSize: '1.4rem', }} >LinkedIn</p>
              </div>
            </div>
            </a>
        </Box>
      </div>
        
      <div className="column">
        <Box className="boxList">
            <div className='DinsideBox'>
              <img src={ EI } alt="emailIcon" className="Dicon"></img>
              <div className="DinsideText">
                <p style={{color: 'rgb(194, 125, 15)', fontSize: '1.4rem', }}>marinarosenwald@gmail.com</p>
              </div>
            </div>
        </Box>
      </div>
        
      <div className="column">
        <Box className="boxList">
        <a href='https://github.com/marinarosenwald'>
            <div className='DinsideBox'>
              <img src={ GI } alt="githubIcon" className="Dicon"></img>
              <div className="DinsideText">
                <p style={{color: 'rgb(194, 125, 15)', fontSize: '1.4rem', }}>GitHub</p>
              </div>
            </div>
          </a>
        </Box>
      </div>

    </div>

  </div>
    
  )
}

export default Home;
