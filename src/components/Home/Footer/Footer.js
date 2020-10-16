import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer mt-5" >
            <div className="container">
                <div className="pt-5">
                    <div className="row">
                            <div className="col-md-5 mr-5 col-ms-12">
                                <h2>Let us handle your project, professionally.</h2>
                                <p>With well written coders. We build amazing apps for all platforms,mobiles and web apps in general.</p>
                            </div>
                            <div className="col-md-5 ml-5 col-ms-12">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" name="" id="" placeholder="Your Email Address" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="" id="" placeholder="Your Company's Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="" id="" placeholder="Your Message" />
                                </div>
                                <div className="d-flex">
                        <Link to='/'>
                            <button className='mb-5 btn btn-dark'>Send</button>
                        </Link>
                    </div>
                            </form>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mb-3">
                        <p>copyright @ 2020 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;