import React from "react"; 
import me from "../photos/me.jpeg"; 
import "./HomeStyle.css";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}


function Home() {
  return (
    <div className="Home" >
    <div id="photo">
      <img src={me} alt="me" class="profileImg" />
    </div>
    <br></br>
    <Box class="box">
      <h2 class="center" style={{margin: 5, fontSize: 30, }}>Marina Rosenwald</h2>
      <p style={{margin: 8, fontSize: 20, }}>Hello and thank you so much for visiting my website :) Here is a great place to learn all about me. Whether it is my previous programs, current projects, or my everyday fun activities you'll find almost everything there is about me here! </p>
    </Box>

    </div>
    
  )
}

export default Home;