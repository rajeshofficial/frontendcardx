import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import '../Css/Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import bg1 from '../Images/carousel-1.jpg'


export default function About() {
  return (
    <div className="container-fluid overflow-hidden py-2 px-lg-0" id ="About" >
        <div className="container about py-2 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                    <div className="position-relative h-100"> 
                        <img className="position-absolute img-fluid w-100 h-100" src={bg1} style={{ objectFit: 'cover' }} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
                    <h1 className="mb-5">Business cards with almost zero carbon emissions </h1>
                    <p className="mb-5">These eco-friendly business cards are crafted with sustainability in mind, boasting nearly zero carbon emissions throughout their production. Made from recycled or sustainable materials and printed with environmentally conscious inks, these cards leave a minimal environmental footprint. By choosing these cards, you demonstrate your commitment to the planet, one card at a time."
                     </p>
                    <div className="row g-4 mb-5">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-globe fa-3x text-primary mb-3"></i>
                            <h5>Global Coverage</h5>
                            <p className="m-0">Discover the power of a single tap with our NFC card. In addition to managing your links, you can seamlessly update and customize your information, ensuring your connections are always up to date. Whether it's for networking, marketing, or personal use, our NFC card is your key to making a memorable digital impression</p>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                            <i className="bi bi-truck fa-3x text-primary mb-3"></i>
                            <h5>On Time Delivery</h5>
                            <p className="m-0">Delivery all over world</p>
                        </div>
                    </div>
                    <a href="www.google.com" className="btn btn-primary py-3 px-5">Explore More</a>
                </div>
            </div>
        </div>
    </div>
  )
}
