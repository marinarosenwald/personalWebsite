import React from 'react';
import "./CodeStyle.css"; 
import "../components/displayBox.css"; 
import web from "../photos/website-icon.png"; 
import wordle from "../photos/wordleIcon.png"; 
import python from "../photos/python.png"; 
import snowman from "../photos/snowman.png"; 
import ml from "../photos/ML.png";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

const codeList = [
  {
    link: 'https://github.com/marinarosenwald/CSS581MachineLearningHomework', 
    src: ml,
    alt: "MLIcon", 
    text: "4 large scale ML homework assignments - private", 
  }, 
  {
    link: 'https://github.com/marinarosenwald/personalWebsite', 
    src: web,
    alt: "webIcon", 
    text: "Code for this Website - React, JavaScript, CSS", 
  }, 
  {
    link: 'https://marinarosenwald.github.io/CSS551FinalWebGL/', 
    src: snowman,
    alt: "snowmanIcon", 
    text: "snowman game (main focus: 3D graphics)", 
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
];

function Code() {
  const boxesPerRow = 3;

  // Divide codeList into rows
  const rows = [];
  for (let i = 0; i < codeList.length; i += boxesPerRow) {
    const row = codeList.slice(i, i + boxesPerRow);
    rows.push(row);
  }

  return (
    <div id='Code'>
      <br></br>
      <div id="ousideBox">
        <Box class="box" id="disclaimer"> 
          <h1>Code</h1>
          <p>Please note that some repos may be private. Contact me @marinarosenwald@gmail.com for access.</p> 
        </Box>
      </div>
      <br></br>

      {rows.map((row, rowIndex) => (
        <div class="row" key={rowIndex}>
          {row.map((code, columnIndex) => (
            <div class="column" key={columnIndex}>
              <Box class="boxList">
                <a href={code.link}>
                  <div class='DinsideBox'>
                    <img src={code.src} alt={code.alt} class="Dicon"></img>
                    <div class="DinsideText">
                      <p>{code.text}</p>
                    </div>
                  </div>
                </a>
              </Box>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Code;
