import React from "react"; 
import me from "../photos/me.jpeg"; 
import "./HomeStyle.css";

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
    <Box class="box">
      <h2 class="center" style={{margin: 5, fontSize: 30, }}>Marina Rosenwald</h2>
      <p style={{margin: 8, fontSize: 20, }}>

      Welcome to my website, and thank you for visiting. I extend my sincerest appreciation for your time and interest. My name is Marina Rosenwald, and I am a highly motivated professional with a recent Bachelor of Science degree in Computer Science from California Polytechnic State University. Having successfully completed my internship and fulfilled my university commitments, I embarked on a transformative journey of travel for the past couple of months. Now that I have returned, I am eagerly prepared to embrace new and exciting opportunities in the professional realm. 
      
      </p>
    </Box>

    </div>
    
  )
}

export default Home;