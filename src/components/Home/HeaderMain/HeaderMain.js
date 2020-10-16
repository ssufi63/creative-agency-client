import React from 'react';
// import './HeaderMain.css';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main className ='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1>Let's Grow Your <br/> Brand To The <br/> Next Level.</h1>
                <small className="text-secondary">Let us built the bridge between your brand and customer</small><br/>
                <button className='btn btn-dark'>Hire us</button>

            </div>
            <div className="col-md-6">
            <img src={frame} alt="" className="img-fluid image"/>
            </div>
               
        </main>
    );
};

export default HeaderMain;