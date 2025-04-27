import React, { useState } from 'react';
import './AlumniSection.css';
import studentImg from './img/about-bg-2.jpg'; // Replace with your actual path

const tabData = {
  Benefits: {
    title: 'Why Choose Kingster?',
    content: `The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kingster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!`,
    subcontent: `Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally...`,
  },
  'Self Development': {
    title: 'Grow Yourself with Kingster',
    content: `Self development is at the heart of the Kingster philosophy. Our courses are designed not just to teach but to transform.`,
    subcontent: `Whether you're working on communication, leadership, or creativity, Kingster empowers students for holistic growth.`,
  },
  Spirituality: {
    title: 'Spiritual Growth at Kingster',
    content: `Spiritual values are embedded in our education. We believe in developing not only the mind but also the spirit.`,
    subcontent: `Our campus hosts meditation, yoga, and other wellness programs that enhance balance and mindfulness.`,
  },
  Alumni: {
    title: 'Connected for Life',
    content: `The Kingster Alumni Network is your bridge to a vibrant and engaged community.`,
    subcontent: `With regular events, mentorship, and career support, being a Kingster alum is a lifelong advantage.`,
  },
};

export default function AlumniSection() {
  const [activeTab, setActiveTab] = useState('Benefits');
  const cards = [
    {
      title: 'Undergraduate',
      description:
        'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.',
      image: '/images/undergraduate.jpg', // adjust paths if needed
    },
    {
      title: 'Graduated & Professional',
      description:
        'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.',
      image: '/img/about-bg-2.jpg',
    },
    {
      title: 'Scholarships & Financial AID',
      description:
        'Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.',
      image: '/images/scholarships.jpg',
    },
  ];

  const styles = {
    container: {
      padding: '2rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
    },
    card: {
      flex: '1 1 300px',
      maxWidth: '400px',
      height: '300px',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(7, 35, 74, 0.85)',
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      padding: '20px',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '10px',
    },
    text: {
      fontSize: '15px',
      lineHeight: 1.6,
    },
  };

  return (
    <>
    <div className="alumni-section bg-light py-5">
      <div className="container custom-w">
        <div className="row align-items-center">
          
          {/* Image with Play Button */}
          <div className="col-md-5 text-center position-relative mb-md-0">
            <img src={studentImg} className="img-fluid" style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}} alt="Student"/>
            <button className="play-btn">
              <span className="play-icon">▶</span>
            </button>
          </div>

          {/* Dynamic Content Box */}
          <div className="col-md-7 position-relative content-box p-4 p-md-5 bg-white rounded shadow-sm">
            <div className="tabs d-flex mb-3 flex-wrap">
              {Object.keys(tabData).map((tab) => (
                <span
                  key={tab}
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </span>
              ))}
            </div>

            <h3 style={{color: "#163269 !important" }} className="fw-bold">{tabData[activeTab].title}</h3>
            <div style={{height: "160px"}}><p className="text-muted mt-3">{tabData[activeTab].content}</p>
            <p className="text-muted">{tabData[activeTab].subcontent}</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div style={styles.container}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            ...styles.card,
            backgroundImage: `url(${card.image})`,
          }}
        >
          <div style={styles.overlay}></div>
          <div style={styles.content}>
            <h5 style={styles.title}>{card.title}</h5>
            <p style={styles.text}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    </>
  );
}
