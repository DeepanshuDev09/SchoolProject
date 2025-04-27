import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaSkype, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer-section text-light" style={{width: "100%"}}>
      <div className="container py-5">
        <div className="row">

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="logo-text">📘 Kids Paradise</h5>
            <p style={{color: "#8d8d8d"}}>Box 35300<br />1810 Campus Way NE<br />Bothell, WA 98011–8246</p>
            <p style={{color: "#fff"}} className="mt-3">📞 +1-2534–4456–345</p>
            <p style={{color: "#fff"}}>📧 <a href="mailto:admin@kingsteruni.edu">admin@kingsteruni.edu</a></p>
            <div className="footer-line"></div>
          </div>

          {/* Our Campus */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-heading">Our Campus</h6>
            <ul className="list-unstyled">
              <li>Acedemic</li>
              <li>Planning & Administration</li>
              <li>Campus Safety</li>
              <li>Office of the Chancellor</li>
              <li>Facility Services</li>
              <li>Human Resources</li>
            </ul>
          </div>

          {/* Campus Life */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-heading">Campus Life</h6>
            <ul className="list-unstyled">
              <li>Accessibility</li>
              <li>Financial Aid</li>
              <li>Food Services</li>
              <li>Housing</li>
              <li>Information Technologies</li>
              <li>Student Life</li>
            </ul>
          </div>

          {/* Academics */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-heading">Academics</h6>
            <ul className="list-unstyled">
              <li>Canvas</li>
              <li>Catalyst</li>
              <li>Library</li>
              <li>Time Schedule</li>
              <li>Apply For Admissions</li>
              <li>Pay My Tuition</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-4 border-top">
          <p className="mb-2 mb-md-0 text-center text-md-start">
            © 2025 DevGroup. All Rights Reserved.
          </p>
          <div className="footer-socials text-center text-md-end">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaSkype />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}
