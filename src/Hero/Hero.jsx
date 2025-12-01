import React from 'react'
import "./Hero.css";
import AOS from 'aos';
import { NavLink } from 'react-router-dom';


function Hero() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container ">

          <a className="" href="#"><img src="./src/assets/Logo.svg" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav   mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className=" nav-link active text-white" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link text-white " href="#">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link text-white" href="#">AboutUs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Register" className="nav-link text-white" href="#">Register</NavLink>
              </li>
            </ul>
            <form className="d-flex">

              <button className="bt" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Hero   