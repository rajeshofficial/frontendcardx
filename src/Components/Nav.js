import React from 'react';
import '../Css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-scroll'




export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-dark sticky-top p-0" id="Nav">
      <a href="index.html" className="navbar-brand bg-dark d-flex align-items-center px-4 px-lg-5">
        <h2 className="mb-2 text-white">OMNIX</h2>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" className="nav-item nav-link active">Home</a>
         <Link to="About" spy={true} smooth={true} offset={50} duration={500} className="nav-item nav-link">About</Link>
         <Link to="Pricing" spy={true} smooth={true} offset={50} duration={500} className="nav-item nav-link">Pricing</Link>
         <Link to="Footer" spy={true} smooth={true} offset={50} duration={500} className="nav-item nav-link">Contact</Link>
         <Link to="Login" spy={true}  className="nav-item nav-link">Log-In</Link>
        </div>
      </div>
    </nav>
  );
}


