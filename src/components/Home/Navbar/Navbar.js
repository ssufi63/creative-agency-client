import React from 'react';
import logo from '../../../images/logos/logo.png'
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div class='container'>
            <nav class="navbar navbar-expand-lg navbar-light">
                    <img src={logo} width="150" height="50" class="d-inline-block align-top" alt="" loading="lazy"/>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                            <a className="nav-link mr-3 active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a className="nav-link mr-3" href="#">Our Portfolio</a>
                            <a className="nav-link mr-3" href="#">Our Team</a>
                            <a className="nav-link mr-3" href="#">Contact Us</a>
                            <Link to="/login"><button type="button" className='btn btn-dark'>Login</button></Link>

                        </div>
                    </div>
                     </nav>
                </div>
    );
};

export default Navbar;