import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text text-${props.textColor}`} to="/">{props.title}</Link >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.textColor}`} aria-current="page" to="/">Home</Link >
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.textColor}`} to="/About">{props.aboutText}</Link>
            </li>
            
          </ul>
          <div className="form-check form-switch text-light">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label me-3 text-${props.textColor}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
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