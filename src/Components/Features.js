import React from 'react'
import '../Css/Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import bg1 from '../Images/carousel-1.jpg'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
export default function Features() {
  return (
   
       <div className="container-fluid overflow-hidden py-5 px-lg-0" id='Features'>
        <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
                    <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
                    <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                        <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>Worldwide Service</h5>
                            <p className="mb-0">Connecting the Globe, One Service at a Time.</p>
                        </div>
                    </div>
                    <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                        <i className="bi bi-truck  text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>On Time Delivery</h5>
                            <p className="mb-0">Precise Punctuality, Every Time</p>
                        </div>
                    </div>
                    <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                        <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>24/7 Telephone Support</h5>
                            <p className="mb-0">Always available: 24/7 telephone support for your convenience and peace.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>

                    <div className="position-relative h-100">
                        <img  className="position-absolute img-fluid w-100 h-100" src={bg1}  style={{ objectFit: 'cover' }}   alt=""/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}
