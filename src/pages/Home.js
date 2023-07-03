import React from "react"; 
import me from "../photos/me.jpeg"; 
import LI from "../photos/linkedin.svg";
import EI from "../photos/emailIcon.png"; 
import GI from "../photos/github.svg";
import "./HomeStyle.css";
import "./displayBox.css"; 

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
      <h2 class="center" style={{margin: 5, fontSize: 30, }}>Marina Rosenwald</h2>
      <p style={{margin: 8, fontSize: 20, }}>

      Welcome to my website, and thank you for visiting. I extend my sincerest appreciation for your time and interest. My name is Marina Rosenwald, and I am a highly motivated professional with a recent Bachelor of Science degree in Computer Science from California Polytechnic State University - San Luis Obispo. Having successfully completed my internship and fulfilled my university commitments, I embarked on a transformative journey of travel for the past couple of months. Now that I have returned, I am eagerly prepared to embrace new and exciting opportunities in the professional realm. 
      
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
                  <img src={ LI } class="Dicon"></img>
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
              <img src={ EI } class="Dicon"></img>
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
              <img src={ GI } class="Dicon"></img>
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
