import React from 'react';
import "./CodeStyle.css";
import "../components/displayBox.css";
import web from "../photos/website-icon.png";
import wordle from "../photos/wordleIcon.png";
import python from "../photos/python.png";
import snowman from "../photos/snowman.png";
import ml from "../photos/ML.png";
import INL from "../photos/INL_Logo.png"
import swiftIcon from "../photos/swiftIcon.png"

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

const codeList = [
  {
    link: 'https://github.com/UWB-Biocomputing',
    src: INL,
    alt: "Lab",
    text: "Intelligent Networks Laboratory GitHub",
    context: "This is the GitHub repository for the Intelligent Networks Laboratory at the University of Washington. It includes the development of the 'Graphitti' simulator, along with related resources. Please note that I manage the lab's website, which is hosted as a private repository. Much of the research code, including certain ongoing projects, will remain private until the publication of my thesis."
  },
  {
    link: 'https://github.com/marinarosenwald/CSS581MachineLearningHomework',
    src: ml,
    alt: "MLIcon",
    text: "Large-Scale Machine Learning Homework Assignments",
    context: "This repository showcases my work on several large-scale machine learning assignments. It includes applications of linear models, Naïve Bayes, logistic regression, random forests, AdaBoost, gradient boosting, decision trees, and clustering algorithms. Additionally, each project includes data cleaning procedures and clear documentation of my thought process throughout the assignments."
  },
  {
    link: 'https://github.com/marinarosenwald/CSS583_KMS_Project',
    src: python,
    alt: "pythonIcon",
    text: "Custom Dictionary Web Application with Microservices and LLM Integration",
    context: "This project was developed as part of a team for the CSS583 - Knowledge Management Systems course. The aim was to build a web application that integrates a MongoDB database search and a Llama Large Language Model (LLM) to provide organization-specific definitions. You can access the final project paper <a href='https://github.com/marinarosenwald/CSS583_KMS_Project/blob/main/CSS%20583_TeamFinalWriteup.pdf' style='color: rgb(194, 125, 15);'>here</a>."
  },
  {
    link: 'https://github.com/marinarosenwald/CSS583_KMS_LLMs',
    src: python,
    alt: "pythonIcon",
    text: "Large Language Model (LLM) Implementation and Prompt Engineering",
    context: "In this project, I applied and analyzed various Large Language Models (LLMs), focusing on their performance in academic contexts. The study included models for text summarization and text generation. This project was a collaboration with Nathanial Jewel."
  },
  {
    link: 'https://github.com/marinarosenwald/RoamRaveApplication',
    src: swiftIcon,
    alt: "swiftIcon",
    text: "RoamRave: Mobile Application for Activity Suggestions",
    context: "RoamRave is a mobile application that suggests activities in the Seattle area. I developed the Swift application, while my project partner translated the code into React Native for cross-platform compatibility. The Swift code can be found <a href='https://github.com/marinarosenwald/RoamRaveApplication/tree/main/SwiftAppUI/RoamRave' style='color: rgb(194, 125, 15);'>here</a>."
  },
  {
    link: 'https://github.com/marinarosenwald/personalWebsite',
    src: web,
    alt: "webIcon",
    text: "Code for Personal Website - React, JavaScript, CSS",
    context: "This website was developed using ReactJS. The linked repository contains the JavaScript portion of the website's code. Note that certain content has been excluded for privacy reasons."
  },
  {
    link: 'https://marinarosenwald.github.io/CSS551FinalWebGL/',
    src: snowman,
    alt: "snowmanIcon",
    text: "Snowman Game (Focus: 3D Graphics)",
    context: "This 3D game was developed as part of a partner project for the Advanced 3D Graphics course. The project showcases the use of WebGL for creating interactive 3D graphics. The game code is available upon request."
  },
  {
    link: 'https://github.com/marinarosenwald/PythonWordle',
    src: wordle,
    alt: "wordleIcon",
    text: "Wordle Recreation in Python",
    context: "This project is a personal recreation of the popular word game 'Wordle,' built using Python. I developed it after realizing my mother could only play one word per day and wanted to expand the experience."
  }

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
        <Box class="boxH" id="disclaimer">
          <h1 style={{ color: 'rgb(194, 125, 15)', textAlign: 'center' }}>Code</h1>
          <p style={{margin: 8, fontSize: '1.4rem', }}>Please note that some repos may be private. Contact me @marinarosenwald@gmail.com for access.</p>
        </Box>
      </div>
      <br></br>

      {rows.map((row, rowIndex) => (
        <div class="row" key={rowIndex}>
          {row.map((code, columnIndex) => (
            <Box className="boxList" style={{ maxWidth: '33%' }} key={`${rowIndex}-${columnIndex}`}>
              <div class='DinsideBox'>
                <a href={code.link}>
                  <img src={code.src} alt={code.alt} class="Dicon"></img>
                </a>
                <div class="DinsideText">
                  <a href={code.link}>
                    <p style={{ color: 'rgb(194, 125, 15)', }}>{code.text}</p>
                  </a>
                  <br></br>
                  <p dangerouslySetInnerHTML={{ __html: code.context }}></p>
                </div>
              </div>
            </Box>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Code;
