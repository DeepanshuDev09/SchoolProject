import React from 'react'
import colicon from './img/col-icon-2.png'
import kids1 from './img/kids1.jpg'
import aboutbg2 from './img/about-bg-2.jpg'
import aboutbg3 from './img/about-bg-3.jpg'

export default function Home() {
  return (
    <>
      <div className='d-flex justify-content-center custom-w' style={{ width: "80%", margin: '0 auto', boxShadow: '3px 3px 5px #888888, -3px -3px 5px #888888' }}>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center' style={{ marginRight: "-1%", overflowX: 'hidden' }}>
            <img src={kids1} alt="Kids" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className='col-md-6 d-flex justify-content-center ' style={{ overflowX: 'hidden', padding: "80px 70px 55px 55px", backgroundImage: "url(" + aboutbg2 + ")", backgroundSize: 'cover', backgroundPosition: 'center', marginLeft: "0.2%", boxSizing: "border-box" }}>
            <div className='d-flex flex-column align-items-start' >
              <h1 style={{ fontSize: '29px', color: '#fff', fontWeight: '700' }}>Learning at</h1>
              <p style={{ fontSize: '19px', color: '#51be78', fontWeight: '500' }}>Kids Paradise Public School</p>
              <p style={{ fontSize: '13px', color: '#c1d3ff', fontWeight: '400' }}>Thanks for clicking here on your web tour of Kids Paradise Public School. I won't keep you long, but I just wanted to urge you to take some time exploring. Enjoy your online visit and think about coming to see us in person. While the website is rich in information, there is no substitute for visiting the School, where you can witness firsthand the remarkable opportunities here. I think you'll find something special at the School.</p>
              <button className='btn' style={{ backgroundColor: '#51be78', fontWeight: "500", color: "#fff", padding: "12px 29px 15px 27px", fontSize: "13px" }}>Explore More</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row' style={{ marginTop: '100px', backgroundImage: "url(" + aboutbg3 + ")", backgroundSize: 'cover', backgroundPosition: 'center', boxSizing: "border-box" }}>
        <div className='col-md-5 d-flex justify-content-center' style={{ overflowX: 'hidden', padding: "80px 70px 55px 55px" }}>
          <p style={{ fontSize: "31px", fontWeight: "bold", color: "#51be78" }}>About Our School</p>
        </div>
        <div className='col-md-6 d-flex justify-content-center' style={{ overflowX: 'hidden', padding: "80px 70px 55px 55px" }}>
          <p style={{ fontSize: "20px", color: "#d8e3fb" }}>The Institution came into existence on 25th June 2006. On that very auspicious day the foundation body of the institution has the aim to provide services of knowledge for the children of rural areas.<br /><br /><br />
            <span style={{ fontSize: "20px", color: "#fff" }}>The institution not only promises to do a lot of things, but also alerts to provide all the facilities which are needed for the students. The teaching staff is very serious about the study of students. Students are being encouraged by the teachers for extra curriculum.A healthy atmosphere is provided for the students through indoor and outdoor games.</span></p>
        </div>
      </div>
      <div style={{ backgroundColor: '#1b2945' }}>
        <div className='row d-flex justify-content-center' style={{ width: "97%", marginLeft: "2%" }}>
          <div className='col-md-3 d-flex justify-content-center' style={{ overflowX: 'hidden', padding: "80px 70px 55px 55px" }}>
            <p style={{ fontSize: "16px", color: "#d8e3fb" }}><img src={colicon} width="50px" alt='img' /><br /><span style={{ fontWeight: "bold", color: "#fff", fontSize: "21px" }}>Education Services</span><br /><br />
              Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
          </div>
          <div className='col-md-3 d-flex justify-content-center' style={{ overflowX: 'hidden', padding: "80px 70px 55px 55px" }}>
            <p style={{ fontSize: "16px", color: "#d8e3fb" }}><img src={colicon} width="50px" alt='img' /><br /><span style={{ fontWeight: "bold", color: "#fff", fontSize: "21px" }}>International Hubs</span><br /><br />
              Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
          </div>
          <div className='col-md-3 d-flex justify-content-center' style={{ overflowX: 'hidden', padding: "80px 70px 55px 55px" }}>
            <p style={{ fontSize: "16px", color: "#d8e3fb" }}><img src={colicon} width="50px" alt='img' /><br /><span style={{ fontWeight: "bold", color: "#fff", fontSize: "21px" }}>Bachelor’s and Master’s</span><br /><br />
              Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
          </div>
          <div className='col-md-3 d-flex justify-content-center' style={{ overflowX: 'hidden', padding: "80px 70px 55px 55px" }}>
            <p style={{ fontSize: "16px", color: "#d8e3fb" }}><img src={colicon} width="50px" alt='img' /><br /><span style={{ fontWeight: "bold", color: "#fff", fontSize: "21px" }}>University Life</span><br /><br />
              Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
          </div>
        </div>
        </div>
    </>
  )
}
