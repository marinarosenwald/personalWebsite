import React from 'react';
import "./CodeStyle.css"; 
import "./displayBox.css"; 
import web from "../photos/website-icon.png"; 
import wordle from "../photos/wordleIcon.png"; 

function Box({ children, ...props }) {
    return <div {...props}>{children}</div>
  }
  

function Code() {
    return (
        <div id='Code'>
        <br></br>
        <div id="ousideBox">
            <Box class="box" id="disclaimer"> 
            <h1>Code</h1>
            <p> Please note that I am in the process of establishing a new GitHub account following my graduation. If you require a code snippet or any programming assistance, please feel free to reach out to me and submit your request. I will be glad to provide the requested code snippet or offer my expertise. Thank you for your understanding and patience as I transition to my new GitHub account.</p> 
            </Box>
        </div>
        <br></br>

        <div class="row">
            <div class="column">
                <Box class="boxList">
                <a href='https://github.com/marinarosenwald/personalWebsite'>
                    <div class='DinsideBox'>
                        <img src={ web } class="Dicon"></img>
                    <div class="DinsideText">
                    <p>Code for this Website - React, JavaScript, CSS</p>
                    </div>
                    </div>
                    </a>
                </Box>
            </div>

            <div class="column">
                <Box class="boxList">
                <a href='https://github.com/marinarosenwald/PythonWordle'>
                    <div class='DinsideBox'>
                        <img src={ wordle } class="Dicon"></img>
                    <div class="DinsideText">
                    <p>Recreating Wordle - Python</p>
                    </div>
                    </div>
                    </a>
                </Box>
            </div>
        </div>
        
        </div>
    )
}
  
export default Code;