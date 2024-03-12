import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles.css"

import Navbar from "./components/Navbar";

import Home from "./pages/Home"; 
import Code from "./pages/Code"; 
import PersonalBlog from "./pages/PersonalBlog"; 
import WorkUpdates from "./pages/WorkUpdates";
import Resume from "./pages/Resume";



  function App() {
    return (
      <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/resume' element={<Resume/>} /> */}
          <Route path='/code' element={<Code/>} />
          <Route path='/workUpdates' element={<WorkUpdates/>} />
          <Route path='/personalBlog' element={<PersonalBlog/>} />
        </Routes>
      </Router>
      </div>
    );
  }
    
  export default App;

    


