import React from 'react';
import "./CodeStyle.css"; 
import web from "../photos/website-icon.png"; 

function Box({ children, ...props }) {
    return <div {...props}>{children}</div>
  }
  

function Code() {
    return (
        <>
        <br></br>
        <div id="ousideBox">
            <Box class="box" id="disclaimer"> 
            <h1>Code</h1>
            <p> Please note that I am in the process of establishing a new GitHub account following my graduation. If you require a code snippet or any programming assistance, please feel free to reach out to me and submit your request. I will be glad to provide the requested code snippet or offer my expertise. Thank you for your understanding and patience as I transition to my new GitHub account.</p> 
            </Box>
        </div>
        <br></br>

        <Box class="boxi">
            <div className='input'>
            <a href='https://github.com/marinarosenwald/personalWebsite'>
                <img src={ web } class="icon"></img>
            </a>
            <div id="insideText">
            <p>Here is the code for my website</p>
            <a href='https://github.com/marinarosenwald/personalWebsite'>GitHub</a>
            </div>
            </div>
        </Box>
        
        </>
    )
}
  
export default Code;