// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/textForm';
import Alert from './Components/Alert';
// import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // USESTATE TEXT COLOR
  const [textColor,setTextColor]=useState('dark');
  //USESTATE DARK/LIGHT MODE
  const [mode,setMode]=useState('light');
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-blue')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode1=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
  }
  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark')
        setTextColor('light')
        document.body.style.backgroundColor='black'
        // showAlert("Dark mode has been turned on",'success')
        // setInterval(()=>{
        //   document.title="Textutils Dark Mode"
        // },2000);
        // setInterval(()=>{
        //   document.title="Textutils Light Mode"
        // },1500)
      }
      else{
        setMode('light')
        setTextColor('dark')
        document.body.style.backgroundColor=''
        // showAlert("Light mode has been turned on",'success')
      }
  }
  // USESTATE ALERT
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }
  return (
    <>
    <Router>
     <Navbar title="Textutils" alert={alert} mode={mode} textColor={textColor} toggleMode={toggleMode} toggleMode1={toggleMode1} aboutText="About"/>
     <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<TextForm heading="Try Textutils: Word Counter, Character Counter" showAlert={showAlert} mode={mode} textColor={textColor}/>} />
          <Route path="About/*" element={<About mode={mode}/>} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
