import React from 'react'
import image from './img/kids2.jpg'
import icon1 from './img/icon-1.png'
import icon2 from './img/icon-2.png'
import icon3 from './img/icon-3.png'
import icon4 from './img/icon-4.png'

export default function Header() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          width: '100%',
          height: '60vh',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div style={{ padding: '20px', borderRadius: '8px' }}>
          <h1
            style={{
              background: 'rgba(24, 36, 59, 0.8)',
              fontSize: 'clamp(24px, 5vw, 48px)',
              fontWeight: '600',
              padding: '1%',
              borderRadius: '4px',
            }}
          >
            Kids Paradise Public School
          </h1>
          <button className='btn'
            style={{
              marginTop: '10px',
              padding: '12px 24px',
              background: '#fff',
              color: '#163269',
              border: 'none',
              fontWeight: '500',
              fontSize: 'clamp(14px, 2vw, 18px)',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Explore More
          </button>
        </div>
      </div>

      {/* FEATURE BOX */}
      <div
        className="d-flex justify-content-center align-items-center flex-wrap custom-w"
        style={{
          minHeight: '170px',
          width: '80%',
          background: '#fff',
          color: '#000',
          margin: '0 auto',
          marginTop: '-70px',
          borderRadius: '0px',
          boxShadow: '3px 0px 0px #888888, -3px -3px 5px #888888',
          zIndex: 10,
          position: 'relative',
        }}
      >
        <div
          className="d-flex align-items-center flex-wrap"
          style={{
            marginLeft: '5%',
            width: '100%',
            background: '#fff',
            color: '#192f59',
            fontWeight: '500',
            fontSize: '18px',
            gap: '10%',
            padding: '20px',
            textAlign: 'center',

          }}
        >
          <div className="d-flex align-items-center">
            <img className='flex-start' src={icon1} alt="icon" height="55" width="55" />
            <span style={{ paddingLeft: '10px' }}>Over 2000+ Students</span>
          </div>
          <div className="d-flex align-items-center custom-m"> 
            <img src={icon2} alt="icon" height="55" width="55" />
            <span style={{ paddingLeft: '10px' }}>Social Activities</span>
          </div>
          <div className="d-flex align-items-center custom-m">
            <img src={icon3} alt="icon" height="55" width="55" />
            <span style={{ paddingLeft: '10px' }}>Athletics & Sports</span>
          </div>
          <div className="d-flex align-items-center custom-m">
            <img src={icon4} alt="icon" height="55" width="55" />
            <span style={{ paddingLeft: '10px' }}>Graduation</span>
          </div>
        </div>
      </div>
    </>
  )
}
