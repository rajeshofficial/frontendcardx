import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import '../Css/Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import bg1 from '../Images/carousel-1.jpg'
import {Link} from 'react-scroll'

// import bg2 from '../Images/carousel-2.jpg'

export default function Slider() {
  return (
    
       <div className="container-fluid p-0 pb-5" id='Slider'>
        <div className="owl-carousel header-carousel position-relative mb-g">
            
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src={bg1} alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, 0.5)' }}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Business card and solution</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-success font-weight-bold ">Conectivity</span> Solution</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Earth-friendly business cards: Minimal carbon footprint.</p>
                                <a href="www.google.com" className="btn btn-dark py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <Link to="pricing" spy={true} smooth={true} offset={50} duration={500} className="btn btn-success py-md-3 px-md-5 animated slideInRight">Buy Now </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src={bg2}  alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, 0.5)' }}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Business card and solution </h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Transport</span> Solution</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Earth-friendly business cards: Minimal carbon footprint..</p>
                                <a href="www.google.com" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="www.google.com" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Buy now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  
  )
}
