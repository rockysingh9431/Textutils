import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text text-${props.textColor}`} to="/">{props.title}</Link >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-${props.textColor}`} aria-current="page" to="/">Home</Link >
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.textColor}`} to="/About">{props.aboutText}</Link>
            </li>
            
          </ul>
          <div className="d-flex form-check form-switch text-light">
            <div className="bg-primary rounded mx-1" onClick={()=>{props.toggleMode1('primary')}} style={{height:'25px',width:'25px', cursor:"pointer"}}></div>
            <div className="bg-danger rounded mx-1" onClick={()=>{props.toggleMode1('danger')}} style={{height:'25px',width:'25px', cursor:"pointer"}}></div>
            <div className="bg-success rounded mx-1" onClick={()=>{props.toggleMode1('success')}} style={{height:'25px',width:'25px', cursor:"pointer"}}></div>
            <div className="bg-warning rounded mx-1" onClick={()=>{props.toggleMode1('warning')}} style={{height:'25px',width:'25px', cursor:"pointer"}}></div>
            <div className="bg-light border border-1 rounded mx-1" onClick={()=>{props.toggleMode1('light')}} style={{height:'25px',width:'25px', cursor:"pointer"}}></div>
            <div className="bg-dark border border-1 rounded mx-1" onClick={()=>{props.toggleMode1('dark')}} style={{height:'25px',width:'25px', cursor:"pointer"}}></div>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`text-${props.textColor}`} onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">{props.text}</label>
            </div>
          </div>
        </div>
      </div>
  </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}
// Navbar.defaultProps ={
//     title: 'set title here',
//     aboutText:'set About here'
// }