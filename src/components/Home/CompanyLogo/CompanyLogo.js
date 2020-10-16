import React from 'react';
import slack from '../../../images/logos/slack.png'
import airbnb from '../../../images/logos/airbnb.png'
import netflix from '../../../images/logos/netflix.png'
import uber from '../../../images/logos/uber.png'
import google from '../../../images/logos/google.png'

const CompanyLogo = () => {
    return (
<div className="container mt-5">
<div className="row d-flex justify-content-between align-items-center container">
            <div className="col-md-2 col-sm-6"><img style={{width: '100px', height: '50px'}} src={slack} alt=""/></div>
            <div className="col-md-2 col-sm-6"><img style={{width: '100px', height: '50px'}} src={google} alt=""/></div>
            <div className="col-md-2 col-sm-6"><img style={{width: '100px', height: '50px'}} src={uber} alt=""/></div>
            <div className="col-md-2 col-sm-6"><img style={{width: '100px', height: '50px'}} src={netflix} alt=""/></div>
            <div className="col-md-2 col-sm-6"><img style={{width: '100px', height: '50px'}} src={airbnb} alt=""/></div>
            
        </div>
</div>
    );
};

export default CompanyLogo;