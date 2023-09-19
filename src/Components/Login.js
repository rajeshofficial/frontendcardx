import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import '../Css/Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import'../Css/Login.css'



export default function Login() {
  return (
    <section className="vh-100" id = "Login">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
    className="img-fluid"
    alt="Login Form Illustration"
  />
</div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h3 className= "text-secondary  py-3 " >  Login Details </h3>
            <form>
            
              {/* Email input  your */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                  placeholder="Enter a valid email address" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </section>
  );
}
