import React from 'react';
import '../Css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';

export default function Pricing() {
  return (
    <div className="container py-2" id = "Pricing">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
        <h1 className="mb-5">Perfect Pricing Plan</h1>
      </div>
      <div className="row g-4 justify-content-center"> {/* Center the pricing cards */}
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="price-item mx-auto"> {/* Center this pricing card */}
            <div className="border-bottom p-4 mb-4">
              <h5 className="text-primary mb-1">Basic Plan</h5>
              <h1 className="display-5 mb-0">
                <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                9.00
                <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
              </h1>
            </div>
            <div className="p-4 pt-0">
  <p><i className="fa fa-check text-success me-3"></i>Bamboo Card</p>
  <p><i className="fa fa-times text-danger me-3"></i>Editing Links</p> {/* Use "fa-times" for the cross symbol */}
  <p><i className="fa fa-times text-danger me-3"></i> Login Access</p>
  <p><i className="fa fa-check text-success me-3"></i> Fast Customer Support</p>
  <p><i className="fa fa-times text-danger me-3"></i> Google Analytics</p>
  <a className="btn-slide mt-2" href="www.google.com"><i className="fa fa-arrow-right"></i><span>Order Now</span></a>
</div>

          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="price-item mx-auto"> {/* Center this pricing card */}
            <div className="border-bottom p-4 mb-4">
              <h5 className="text-primary mb-1">Standard Plan</h5>
              <h1 className="display-5 mb-0">
                <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                22.00
                <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Month</small>
              </h1>
            </div>
            <div className="p-4 pt-0">
              <p><i className="fa fa-check text-success me-3"></i>Bamboo Card </p>
              <p><i className="fa fa-check text-success me-3"></i>Editing Links</p>
              <p><i className="fa fa-check text-success me-3"></i>Login Access</p>
              <p><i className="fa fa-check text-success me-3"></i>Fast Customer Support</p>
              <p><i className="fa fa-check text-success me-3"></i>Google Analytics</p>
              <a className="btn-slide mt-2" href="www.google.com"><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


