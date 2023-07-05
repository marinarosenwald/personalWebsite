import React from 'react';
import "./CodeStyle.css"; 
import "../components/displayBox.css"; 
import web from "../photos/website-icon.png"; 
import wordle from "../photos/wordleIcon.png"; 
import python from "../photos/python.png"; 

function Box({ children, ...props }) {
    return <div {...props}>{children}</div>
  }
  
const codeList = [
    {
        link: 'https://github.com/marinarosenwald/personalWebsite', 
        src: web,
        alt: "webIcon", 
        text: "Code for this Website - React, JavaScript, CSS", 
    }, 
    {
        link: 'https://github.com/marinarosenwald/PythonWordle', 
        src: wordle,
        alt: "wordleIcon", 
        text: "Recreating Wordle - Python", 
    }, 
    {
        link: 'https://github.com/marinarosenwald/interviewPrep', 
        src: python,
        alt: "pythonIcon", 
        text: "Practice interview questions - Python", 
    }, 
]

{codeList.map((code) => (
    <div class="column">
        <Box class="boxList">
            <a href={ code.link }>
                    <div class='DinsideBox'>
                        <img src={ code.src } alt={ code.alt } class="Dicon"></img>
                    <div class="DinsideText">
                    <p>{ code.text }</p>
                    </div>
                    </div>
                    </a>
                </Box>
            </div>
))}

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
            {codeList.map((code) => (
                <div class="column">
                    <Box class="boxList">
                        <a href={ code.link }>
                                <div class='DinsideBox'>
                                    <img src={ code.src } alt={ code.alt } class="Dicon"></img>
                                <div class="DinsideText">
                                <p>{ code.text }</p>
                                </div>
                                </div>
                                </a>
                            </Box>
                        </div>
            ))}

        </div>
        
        </div>
    )
}
  
export default Code;