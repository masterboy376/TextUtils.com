import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg border-bottom navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input onClick={props.enableDarkMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} mode`}</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {//this should be 'p' of lower case
  title: PropTypes.string.isRequired,//now in this case if the defaultProps are not passed for this one there will be error
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: '--title--',
  aboutText: '--about--'
}
