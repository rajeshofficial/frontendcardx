import React from 'react'
import '../Css/Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';


export default function Footer() {
  return (
   
      

    
    <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" id = "Footer" data-wow-delay="0.1s" style={{ marginTop: '6rem' }}>

<div className="container py-2">
    <div className="row g-5">
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Glasgow City , UK</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@cardx.com</p>
            <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="www.google.com"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href="www.google.com"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href="www.google.com"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href="www.google.com"><i className="bi bi-facebook"></i></a>
              



            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Services</h4>
            <a className=" btn btn-link  " href="www.google.com">Digital cards</a>
            <a className="btn btn-link" href="www.google.com">bambo card </a>
            <a className="btn btn-link" href="www.google.com">web development </a>
            <a className="btn btn-link" href="www.google.com">wordpress</a>
            <a className="btn btn-link" href="www.google.com">Industry solutions</a>
            

        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Why Us </h4>
            <a className="btn btn-link" href="www.google.com">About Us</a>
            <a className="btn btn-link" href="www.google.com">Contact Us</a>
            <a className="btn btn-link" href="www.google.com">Our Services</a>
            <a className="btn btn-link" href="www.google.com">Terms & Condition</a>
            <a className="btn btn-link" href="www.google.com">Support</a>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Subscribe our codex news letter .</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>

                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
        </div>
    </div>
</div>
<div className="container">
    <div className="copyright">
        <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="www.google.com">cardx</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
                <a className="border-bottom" href="www.google.com">Rajesh Singh </a>
            </div>
        </div>
    </div>
</div>
</div>

  )
}
