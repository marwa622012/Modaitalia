import './Navbar.css'
import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Navbar() {    
    return(
        <nav className="navbar nav navbar-expand-xl">
    <div className="container-fluid ">
    <img className='logo me-lg-5 pe-lg-5' src={require('../images/sandy card final0.png')} alt='img'/>
    <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <h5 className='text-white pt-2 d-none d-lg-block'>Textile Designers & Collections</h5>
    <div className="collapse navbar-collapse ms-lg-3 ps-lg-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link nav-1 aNamective" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link nav-1" to="/aboutus">
                About Us
            </Link>
        </li>
        <li className="nav-item dropdown">
            <Link className="nav-link nav-1 dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
            </Link>
            <ul className="dropdown-menu deep">
            <li className="dropdown-submenu">
        <Link
        className="dropdown-item text-dark"
            to="#"
            onClick={(e) => {
      // Prevent navigating to "#" and toggle submenu in mobile
            e.preventDefault();
            const submenu = e.currentTarget.nextElementSibling;
            submenu.classList.toggle('d-none');
    }}
>
    Design & Trend Services <FontAwesomeIcon icon={faCaretRight} />
    </Link>
    <ul className="test d-none">

            <li><Link className="dropdown-item text-dark" to="/shirts">Shirts</Link></li>
            <li><Link className="dropdown-item text-dark" to="/trousers">Trousers</Link></li>
            <li><Link className="dropdown-item text-dark" to="/suits">Suits</Link></li>
            <li><Link className="dropdown-item text-dark" to="/knitting"> Knitting</Link></li>
            <li><Link className="dropdown-item text-dark" to="/womenswear">Womenswear</Link></li>
            <li><Link className="dropdown-item text-dark" to="/menwear">Menswear</Link></li>
            <li><Link className="dropdown-item text-dark" to="/kidswear">Kidswear</Link></li>
            <li><Link className="dropdown-item text-dark" to="/sportwear">Sportswear</Link></li>
            <li><Link className="dropdown-item text-dark" to="/prints"> Prints</Link></li>
            <li><Link className="dropdown-item text-dark" to="/exclusive"> Exclusive</Link></li>
            </ul>
            </li>
            <li><Link className="dropdown-item text-dark" to="/fabric">Fabrics & Garment Sourcing</Link></li>
            </ul>
        </li>
        <li className="nav-item">
            <Link className="nav-link nav-1 " to="/partner">OUR PARTNERS</Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" className="nav-link nav-1" aria-disabled="true">CONTACT Us</Link>
        </li>
        </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
    </div>
    </div>
</nav>
    )
}

export default Navbar;

