import React from 'react';
import RR from '../Documents/MarinaRosenwaldResume.pdf'
import "./ResumeStyle.css"; 

 
function Resume () {
    return (
        <div id="resumeDisplay">
            <iframe id="pdf" src={RR} title="myFrame"></iframe>
        </div>
        )
  }
 
export default Resume;