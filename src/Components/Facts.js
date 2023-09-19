import React from 'react'
import '../Css/Home.css'
import 'bootstrap/dist/css/bootstrap.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';


export default function Facts() {
  return (
    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
                    <h1 className="mb-5">  Manage All Of Your Links in one place</h1>
                    <p className="mb-5">Streamline your digital presence with our NFC (Near Field Communication) card, your all-in-one solution to managing and sharing all your important links in one convenient place. From your website and social media profiles to contact information and portfolio, simply tap the card with a compatible device to instantly access and share your digital footprint effortlessly.</p>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-headphones fa-2x flex-shrink-0 bg-dark p-3 text-white"></i>
                        <div className="ps-4">
                            <h6>Call for any query!</h6>
                            <h3 className="text-primary m-0">+9999211991</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-4 align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-dark p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                                <i className="fa fa-users fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Happy Clients</p>
                            </div>
                            <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-ship fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Complete Shipments</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                                <i className="fa fa-star fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Customer Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
  )
}
