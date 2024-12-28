import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top" style={{ zIndex: 1000 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* Replace 'logo.png' with the name of your downloaded image file */}
          <img 
            src="/logo.png" 
            alt="iNotebook Logo" 
            style={{ width: "83px", height: "45px" }} 
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? (
            <form className="d-flex" role="search">
              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login <i className="fa-solid fa-right-to-bracket mx-1"></i> 
              </Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                Sign Up <i className="fa-solid fa-user-plus mx-1"></i>
              </Link>
            </form>
          ) : (
            <button onClick={handleLogout} className='btn btn-primary'>Log Out</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
