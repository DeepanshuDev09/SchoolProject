import React from 'react';
import './AboutUs.css'; // we'll move CSS here!
import icon from './icon-1.png'; // Assuming you have an icon image

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Banner */}
       <div
              style={{
                display: 'grid',
                placeItems: 'center',
                width: '100%',
                height: '60vh',
                background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://dpanel.kpps.edu.in/_assets_/gallery/IMG_9168.JPG')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <div className='banner-content' style={{ padding: '20px', borderRadius: '8px' }}>
                <p>
                  Know Us Better
                </p>
                <h1>
                  About Us
                </h1>
              </div>
            </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/">Home</a> <span>›</span> <a href="/about">About Us</a>
      </div>

      {/* Content */}
      
      <section className="content-section">
        <h2 className="section-title">Kids Paradise’s History</h2>
        <div className="content-columns">
          <div className="column">
            If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds.
          </div>
          <div className="column">
            If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’t application, academic and personal, to select students who suit to our community.
          </div>
        </div>
      </section>

      <section className="campus-tour">
      <div className="row">
      <div className="col-md-6 left-side d-flex flex-column justify-content-center" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <img src={icon} alt="Campus Icon" className="icon" width="50px" height="50px" />

        <h2 style={{fontWeight: "bold", paddingBottom: "20px", fontSize: "30px", paddingTop: "20px"}}>Special Campus Tour</h2>
        <p style={{fontSize: "18px", lineHeight: "1.6", color: "#555"}}>
          Campus on a tour designed for prospective graduate and professional students. 
          You will see how our university like, facilities, student and life in this university.
          Meet our graduate admissions representative to learn more about our graduate programs 
          and decide what it the best for you.
        </p>
      </div>
      <div className="col-md-6 right-side">
        <img src="https://dpanel.kpps.edu.in/_assets_/gallery/IMG_9168.JPG" alt="Campus Tour" className="tour-img" width="100%" />
      </div>
      </div>
    </section>
    <section className="campus-tour">
      <div className="row">
      <div className="col-md-6 right-side">
        <img src="https://dpanel.kpps.edu.in/_assets_/gallery/IMG_9168.JPG" alt="Campus Tour" className="tour-img" width="100%" />
      </div>
      <div className="col-md-6 left-side d-flex flex-column justify-content-center" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <img src={icon} alt="Campus Icon" className="icon" width="50px" height="50px" />

        <h2 style={{fontWeight: "bold", paddingBottom: "20px", fontSize: "30px", paddingTop: "20px"}}>Special Campus Tour</h2>
        <p style={{fontSize: "18px", lineHeight: "1.6", color: "#555"}}>
          Campus on a tour designed for prospective graduate and professional students. 
          You will see how our university like, facilities, student and life in this university.
          Meet our graduate admissions representative to learn more about our graduate programs 
          and decide what it the best for you.
        </p>
      </div>
      </div>
    </section>
    <section className="campus-tour">
      <div className="row">
      <div className="col-md-6 left-side d-flex flex-column justify-content-center" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <img src={icon} alt="Campus Icon" className="icon" width="50px" height="50px" />

        <h2 style={{fontWeight: "bold", paddingBottom: "20px", fontSize: "30px", paddingTop: "20px"}}>Special Campus Tour</h2>
        <p style={{fontSize: "18px", lineHeight: "1.6", color: "#555"}}>
          Campus on a tour designed for prospective graduate and professional students. 
          You will see how our university like, facilities, student and life in this university.
          Meet our graduate admissions representative to learn more about our graduate programs 
          and decide what it the best for you.
        </p>
      </div>
      <div className="col-md-6 right-side">
        <img src="https://dpanel.kpps.edu.in/_assets_/gallery/IMG_9168.JPG" alt="Campus Tour" className="tour-img" width="100%" />
      </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
