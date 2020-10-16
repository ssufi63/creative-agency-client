import React from 'react';
import logo from '../../images/logos/logo.png';
import {Link} from 'react-router-dom';

const SidebarOne = () => {
    return (
        <div className="col-md-2 col-sm-12">
            <Link to="/">
                <img style={{width: '150px'}} src={logo} alt="logo"/>
            </Link>
            <div className="links mt-5">
                <p>
                    <Link className="link" to='/projectList'>service List</Link>
                </p>
                <p>
                    <Link className="link" to='/addService'>Add Service</Link>
                </p>
                <p>
                    <Link className="link" to='/makeAdmin'>Make Admin</Link>
                </p>
            </div>
        </div>
    );
};

export default SidebarOne;