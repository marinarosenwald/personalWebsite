import React from 'react';
import "./CodeStyle.css";
import "../components/displayBox.css";
import web from "../photos/website-icon.png";
import wordle from "../photos/wordleIcon.png";
import python from "../photos/python.png";
import snowman from "../photos/snowman.png";
import ml from "../photos/ML.png";
import INL from "../photos/INL_Logo.png"

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

const codeList = [
  {
    link: 'https://github.com/UWB-Biocomputing',
    src: INL,
    alt: "Lab",
    text: "Intelligent Networks Laboratory GitHub",
    context: "This is the GitHub page for the Intelligent Networks Laboratory. Here you can see the Simulator \"Graphitti\" and relavant pages assiciated with it's development. \nNote: I upkeep the lab's website which is a private repo on this page and much of my research-related code will not be publicly available until my thesis is published."
  },
  {
    link: 'https://github.com/marinarosenwald/CSS581MachineLearningHomework',
    src: ml,
    alt: "MLIcon",
    text: "4 large scale ML homework assignments",
    context: "In these projects you will see the application of linear modeling, Naïve Bayes, logistic regression, random forest, AdaBoost, gradient boost, decision trees, and various clustering algorithms. These assignments also include the data cleaning steps and a clear written examples of my thought process throughout the assignments."
  },
  {
    link: 'https://marinarosenwald.github.io/CSS551FinalWebGL/',
    src: snowman,
    alt: "snowmanIcon",
    text: "snowman game (main focus: 3D graphics)",
    context: "This game was developed as a partner final project for Advanced 3D Graphics. The code for this game is available upon request."

  },
  {
    link: 'https://github.com/marinarosenwald/CSS583_KMS_Project',
    src: python,
    alt: "pythonIcon",
    text: "Custom dictionary web-application with microservices and LLM integration",
    context: "This project was created as a group final project for CSS583 - Knowledge management Systems. The goal of this project was to create a website that implemented both a MongoDB database search and a __ LLM to give the user a definition on organization specific language. Find our final paper about this project here: ___"
  },
  {
    link: 'https://github.com/marinarosenwald/CSS583_KMS_LLMs',
    src: python,
    alt: "pythonIcon",
    text: "LLM implementation and prompt engineering",
    context: "The goal of this project was to apply, analyze, and compare Large Language Models. We were looking specifically at the models' success when applied to academic topics and text. We looked at both Summarization and Text Generation Models. This project was done in partnership with Nathanial Jewel."
  },
  {
    link: 'https://github.com/marinarosenwald/personalWebsite',
    src: web,
    alt: "webIcon",
    text: "Code for this Website - React, JavaScript, CSS",
    context: "This webite was developed using ReactJS. This is a link to the JavaScript protion of the website. Please note that some of the content of this website was left off of GitHub for privacy reasons."
  },
  {
    link: 'https://github.com/marinarosenwald/PythonWordle',
    src: wordle,
    alt: "wordleIcon",
    text: "Recreating Wordle - Python",
    context: "This was a fun project that I did in an evening because my mom was disappointed that she could only play one word a day in wordle."
  },
  //   {
  //     link: 'https://github.com/marinarosenwald/interviewPrep', 
  //     src: python,
  //     alt: "pythonIcon", 
  //     text: "Practice interview questions - Python", 
  //   }, 


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
          <h1 style={{ color: 'rgb(194, 125, 15)', }}>Code</h1>
          <p>Please note that some repos may be private. Contact me @marinarosenwald@gmail.com for access.</p>
        </Box>
      </div>
      <br></br>

      {rows.map((row, rowIndex) => (
        <div class="row" key={rowIndex}>
          {row.map((code, columnIndex) => (
            // <div class="column" key={columnIndex}> 
              <Box class="boxList">
                <div class='DinsideBox'>

                  <a href={code.link}>
                    <img src={code.src} alt={code.alt} class="Dicon"></img>
                  </a>
                  <div class="DinsideText">
                    <a href={code.link}>
                      <p style={{ color: 'rgb(194, 125, 15)', }}>{code.text}</p>
                    </a>
                    <br></br>
                    <p>{code.context}</p>
                  </div>

                </div>
              </Box>
            // </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Code;
