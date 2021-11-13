import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to='/' class="navbar-brand">ODA CAR</Link>
                {/* mobile btn */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
                
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/allcars' class="nav-link">All Cars</Link>
        </li>
        <li class="nav-item">
          <Link to='/dashbord' class="nav-link">Dashbord</Link>
        </li>
      </ul>
      <div className="d-flex">
         <div>
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link class="nav-link" aria-current="page" to="/login">Login</Link>     
                </li>
                <li className="nav-item">
                    <Link class="nav-link" aria-current="page" to="/singup">Sing Up</Link>     
                </li>
             </ul>    
        </div>
    </div>
    </div>
  </div>
</nav>
    );
};

export default NavBar;