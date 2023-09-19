import React from 'react'
import '../Css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JS bundle
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';

export default function UserNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-dark sticky-top p-0">
    <a href="index.html" className="navbar-brand bg-dark d-flex align-items-center px-4 px-lg-5">
      <h2 className="mb-2 text-white">OMNIX</h2>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="service.html" className="nav-item nav-link">Analytics</a>
        <a href="contact.html" className="nav-item nav-link">Edit Profile </a>
        <a href="Login.html" className="nav-item nav-link">Log-Out</a>
        
      </div>
    </div>
  </nav>
  )
}
