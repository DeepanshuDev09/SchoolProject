import React from 'react';
import logo from './img/kids-logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div style={{height: "70px"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{ marginLeft: '10%'}}>
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
          <button
            style={{ marginRight: '10%'}}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a style={{ fontSize: '21px' }} className="nav-link active" aria-current="page" href="/">
                  <b>Kids Paradise Public School</b>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginRight: '10%' }}>
              <li className="nav-item">
                <a className="nav-link active link-left" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active link-left" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active link-left" href="/">Academics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active link-left" href="/">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active link-left text-wrap" href="/">Contact</a>
              </li>
            <li className="nav-item">
            <form className="d-flex" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success mx-2" type="submit">Search</button>
            </form>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
