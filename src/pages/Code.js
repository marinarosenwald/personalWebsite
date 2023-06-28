import React from 'react';
import "./CodeStyle.css"; 

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
        </>
    )
}
  
export default Code;