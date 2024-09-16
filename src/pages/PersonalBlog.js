import React from 'react';
import "./PersonalBlog.css"
import "../components/displayBox.css"; 

import grad from "../photos/Travel/grad.jpeg"; 
import grad1 from "../photos/Travel/grad1.jpeg";
import spain from "../photos/Travel/spain.jpeg"; 
import spain1 from "../photos/Travel/spain1.jpeg"; 
import spain2 from "../photos/Travel/spain2.jpeg"; 
import spain3 from "../photos/Travel/spain3.jpeg"; 
import spain4 from "../photos/Travel/spain4.jpeg"; 
import spain5 from "../photos/Travel/spain5.jpeg"; 
import spain6 from "../photos/Travel/spain6.jpeg"; 
import spain7 from "../photos/Travel/spain7.jpeg"; 
import spain8 from "../photos/Travel/spain8.jpeg"; 
import spain9 from "../photos/Travel/spain9.jpeg"; 
import spain11 from "../photos/Travel/spain11.jpeg"; 
import spain12 from "../photos/Travel/spain12.jpeg"; 
import spain13 from "../photos/Travel/spain13.jpeg"; 
import spain14 from "../photos/Travel/spain14.jpeg"; 
import spain15 from "../photos/Travel/spain15.jpeg"; 
import vat from "../photos/Travel/vat.jpeg";
import italy from "../photos/Travel/italy.jpeg"; 
import italy1 from "../photos/Travel/italy1.jpeg"; 
import italy2 from "../photos/Travel/italy2.jpeg"; 
import italy3 from "../photos/Travel/italy3.jpeg"; 
import italy4 from "../photos/Travel/italy4.jpeg"; 
import italy5 from "../photos/Travel/italy5.jpeg"; 
import italy6 from "../photos/Travel/italy6.jpeg"; 
import italy7 from "../photos/Travel/italy7.jpeg"; 
import italy8 from "../photos/Travel/italy8.jpeg";
import menorca from "../photos/Travel/menorca.jpeg"; 
import menorca1 from "../photos/Travel/menorca1.jpeg"; 
// import menorca2 from "../photos/Travel/menorca2.JPG"; 
import menorca3 from "../photos/Travel/menorca3.jpeg"; 
import menorca4 from "../photos/Travel/menorca4.jpeg"; 
import menorca5 from "../photos/Travel/menorca5.jpeg"; 
import menorca6 from "../photos/Travel/menorca6.jpeg"; 
import sanFran from "../photos/Travel/sanFran.jpeg";
import santaBarb from "../photos/Travel/santaBarb.jpeg";
import slo from "../photos/Travel/slo.jpeg";
import slo1 from "../photos/Travel/slo1.jpeg";
import slo2 from "../photos/Travel/slo2.jpg";
import slo3 from "../photos/Travel/slo3.jpeg";
import slo4 from "../photos/Travel/slo4.jpeg";
import slo5 from "../photos/Travel/slo5.jpeg";
import la from "../photos/Travel/la.jpeg";
import la1 from "../photos/Travel/la1.jpeg";
import la2 from "../photos/Travel/la2.jpeg";
import la3 from "../photos/Travel/la3.jpeg";
import lake from "../photos/Travel/lake.jpeg";
// import lake1 from "../photos/Travel/lake1.JPG";
import lake2 from "../photos/Travel/lake2.jpeg";
import si from "../photos/Travel/si.jpeg";
import stevens from "../photos/Travel/stevens.jpeg";
import spokane from "../photos/Travel/spokane.jpeg";
import newport from "../photos/Travel/newport.jpeg";
import newport1 from "../photos/Travel/newport1.jpeg";
import redbuff from "../photos/Travel/redbuff.jpeg";
import bellevue from "../photos/Travel/bellevue.jpeg";



const imagesList = [
    {
        id: grad,
        src: grad,
        alt: "grad",
      },
      {
        id: grad1,
        src: grad1,
        alt: "grad1",
      },
    {
      id: spain,
      src: spain,
      alt: "spain",
    },
    {
        id: spain1,
        src: spain1,
        alt: "spain1",
      },
      {
        id: spain2,
        src: spain2,
        alt: "spain2",
      },
      {
        id: spain3,
        src: spain3,
        alt: "spain3",
      },
      {
        id: spain4,
        src: spain4,
        alt: "spain4",
      },
      {
        id: spain5,
        src: spain5,
        alt: "spain5",
      },
      {
        id: spain6,
        src: spain6,
        alt: "spain6",
      },
      {
        id: spain7,
        src: spain7,
        alt: "spain7",
      },
      {
        id: spain8,
        src: spain8,
        alt: "spain8",
      },
      {
        id: spain9,
        src: spain9,
        alt: "spain9",
      },
      {
        id: spain11,
        src: spain11,
        alt: "spain11",
      },
      {
        id: spain12,
        src: spain12,
        alt: "spain12",
      },
      {
        id: spain13,
        src: spain13,
        alt: "spain13",
      },
      {
        id: spain14,
        src: spain14,
        alt: "spain14",
      },
      {
        id: spain15,
        src: spain15,
        alt: "spain15",
      },
      {
        id: vat,
        src: vat,
        alt: "vat",
      },
      {
        id: italy,
        src: italy,
        alt: "italy",
      },
      {
        id: italy1,
        src: italy1,
        alt: "italy1",
      },
      {
        id: italy2,
        src: italy2,
        alt: "italy2",
      },
      {
        id: italy3,
        src: italy3,
        alt: "italy3",
      },
      {
        id: italy4,
        src: italy4,
        alt: "italy4",
      },
      {
        id: italy5,
        src: italy5,
        alt: "italy5",
      },
      {
        id: italy6,
        src: italy6,
        alt: "italy6",
      },
      {
        id: italy7,
        src: italy7,
        alt: "italy7",
      },
      {
        id: italy8,
        src: italy8,
        alt: "italy8",
      },
      {
        id: menorca,
        src: menorca,
        alt: "menorca",
      },
      {
        id: menorca1,
        src: menorca1,
        alt: "menorca1",
      },
      {
        id: menorca3,
        src: menorca3,
        alt: "menorca3",
      },
      {
        id: menorca4,
        src: menorca4,
        alt: "menorca4",
      },
      {
        id: menorca5,
        src: menorca5,
        alt: "menorca5",
      },
      {
        id: menorca6,
        src: menorca6,
        alt: "menorca6",
      },
      {
        id: sanFran,
        src: sanFran,
        alt: "sanFran",
      },
      {
        id: santaBarb,
        src: santaBarb,
        alt: "santaBarb",
      },
      {
        id: slo,
        src: slo,
        alt: "slo",
      },
      {
        id: slo1,
        src: slo1,
        alt: "slo1",
      },
      {
        id: slo2,
        src: slo2,
        alt: "slo2",
      },
      {
        id: slo3,
        src: slo3,
        alt: "slo3",
      },
      {
        id: slo4,
        src: slo4,
        alt: "slo4",
      },
      {
        id: slo5,
        src: slo5,
        alt: "slo5",
      },
      {
        id: la,
        src: la,
        alt: "la",
      },
      {
        id: la1,
        src: la1,
        alt: "la1",
      },
      {
        id: la2,
        src: la2,
        alt: "la2",
      },
      {
        id: la3,
        src: la3,
        alt: "la3",
      },
      {
        id: lake,
        src: lake,
        alt: "lake",
      },
      {
        id: lake2,
        src: lake2,
        alt: "lake2",
      },
      {
        id: si,
        src: si,
        alt: "si",
      },
      {
        id: stevens,
        src: stevens,
        alt: "stevens",
      },
      {
        id: spokane,
        src: spokane,
        alt: "spokane",
      },
      {
        id: newport,
        src: newport,
        alt: "newport",
      },
      {
        id: newport1,
        src: newport1,
        alt: "newport1",
      },
      {
        id: redbuff,
        src: redbuff,
        alt: "redbuff",
      },
      {
        id: bellevue,
        src: bellevue,
        alt: "bellevue",
      },

  ];

function Box({ children, ...props }) {
    return <div {...props}>{children}</div>
  }

function PersonalBlog() {
    return (
        <div id="PersonalBlog">
        <Box class="box" id="disclaimer"> 
            <h1 style={{color: 'rgb(194, 125, 15)', }}>Personal Blog</h1>
            <p>Below are some photo highlights of my trips since March of 2023</p> 
            <p>Places include: Spain, Italy, Menorca, San Francisco, Santa Barbra, SLO, Los Angeles, Lake Alice, Snoqualmie Pass, Spokane, Red Buffs, Newport OR</p>
        </Box>
        <br></br>
        <div>
            {imagesList.map((image) => (
                <img src={image.src} alt={image.alt} class="photo" />
            ))}
        </div>

        <p style={{textAlign:"center", fontSize:25}}>Copyright © Marina Rosenwald 2023</p>
        <p style={{textAlign:"center", fontSize:25}}>Please contact me for use of any photos email: marinarosenwald@gmail.com</p>

    </div>
    )
}
  
export default PersonalBlog;