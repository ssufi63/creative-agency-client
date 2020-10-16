import React from 'react';
import './Sidebar.css';
import logo from '../../images/logos/logo.png';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="col-md-2 col-sm-12">
            <Link to="/">
                <img style={{width: '150px'}} src={logo} alt="logo"/>
            </Link>
            <div className="links mt-5">
                <p>
                    <Link className="link active" to='/orders'>Order</Link>
                </p>
                <p>
                    <Link className="link" to='/serviceList'>Service List</Link>
                </p>
                <p>
                    <Link className="link" to='/review'>Review</Link>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;