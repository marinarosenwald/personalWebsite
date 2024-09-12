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
      <img src={me} alt="me" class="profileImg" />
    </div>
    <br></br>
    <Box class="boxH">
    <h2 className="center" style={{ margin: 5, fontSize: 30, }}>Marina Rosenwald</h2>
      <p style={{margin: 8, fontSize: 20, }}>

      Hello, I'm Marina Rosenwald. I am currently pursuing a Master's degree at the University of Washington, focusing on Artificial Intelligence and Machine Learning. Concurrently, I am gaining hands-on experience as a Development/GIS/Data Science Systems, Data and Technology Intern, delving into the practical applications and nuances of Computer Vision.
      <br></br>
      <br></br>
      My academic journey is driven by an insatiable curiosity for technology and its potential to solve multifaceted problems. I am dedicated to leveraging my skills in AI/ML to tackle real-world challenges and contribute meaningfully to the technological landscape.
      <br></br>
      <br></br>
      Outside of academia and work, I find myself exploring the many trails the Pacific Northwest has to offer, snowboarding, volunteering with nonprofits aiming to make the outdoors more accessible for those with disabilities, and experimenting in the kitchen. 
      <br></br>
      <br></br>
      I am excited about the possibilities technology offers and eager to contribute to the future of Artificial Intelligence. 
      
      </p>
    </Box>

    <br></br>

    <Box class="boxH">
      <div id="contact">
      <h2>
        Contact me
      </h2>
      </div>
    </Box>

    <br></br>
    <div class="row">

    <div class="column">
        <Box class="boxList">
        <a href='https://www.linkedin.com/in/marina-rosenwald/'>
            <div class='DinsideBox'>
                  <img src={ LI } alt="LinkedInIcon" class="Dicon"></img>
              <div class="DinsideText">
              <p>LinkedIn</p>
              </div>
            </div>
            </a>
        </Box>
      </div>
        
      <div class="column">
        <Box class="boxList">
            <div class='DinsideBox'>
              <img src={ EI } alt="emailIcon" class="Dicon"></img>
              <div class="DinsideText">
                <p>marinarosenwald@gmail.com</p>
              </div>
            </div>
        </Box>
      </div>
        
      <div class="column">
        <Box class="boxList">
        <a href='https://github.com/marinarosenwald'>
            <div class='DinsideBox'>
              <img src={ GI } alt="githubIcon" class="Dicon"></img>
              <div class="DinsideText">
                <p>GitHub</p>
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
