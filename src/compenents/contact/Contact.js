import { useState } from 'react'
import React from 'react'
import img from './about-bg-3.jpg'
import './contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with API call
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // reset
      };
  return (
    <div>
      <div
              style={{
                display: 'grid',
                placeItems: 'center',
                width: '100%',
                height: '60vh',
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <div className='banner-content' style={{ padding: '20px', borderRadius: '8px' }}>
                <h1>
                  Contact Us
                </h1>
                <p>
                  Get Intouch
                </p>
              </div>
            </div>
            <section className="contact-info row">
      <div className="contact-card col-md-4">
        <div className="icon">📞</div>
        <h3>Phone</h3>
        <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
        <a href="tel:+123452345">+1-2345-2345</a>
      </div>
      
      <div className="contact-card col-md-4">
        <div className="icon">✉️</div>
        <h3>Email</h3>
        <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
        <a href="mailto:contact@goodlayers.com">Contact@goodlayers.com</a>
      </div>

      <div className="contact-card col-md-4">
        <div className="icon">📍</div>
        <h3>Location</h3>
        <p>4 apt. Flawing Street. The Grand Avenue.<br/>Liverpool, UK 33342</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
          View On Google Map
        </a>
      </div>
    </section>
    <div className="contact-container">
      <h2 className="contact-heading">LEAVE US YOUR INFO</h2>
      <p className="contact-subheading">AND WE WILL GET BACK TO YOU.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject*"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message*"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-button">SUBMIT NOW</button>
      </form>
    </div>
    <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="450px" id="gmap_canvas" src="https://maps.google.com/maps?q=Kids%20Paradise%20public%20school%2C%20%20DURGAPUR%20No.-2%2CDINESHPUR%2C%20Dist.-%20U.S.NAGAR(UTTARAKHAND)&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="/"></a></div></div>          
    </div>
  )
}
