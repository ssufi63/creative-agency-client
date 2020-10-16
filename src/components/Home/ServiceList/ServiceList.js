import React from 'react';
const ServiceList = ({ data }) => {
    const {image, title, description} = data;
    return (
        <div style={{'margin-right': '58px'}}>
            <div className="card service p-4" style={{ width: '14rem', border: 'none', 'text-align': 'center' }}>
                <img src={image} style={{ height: '200px', width: '200px' }} alt="" />
                <div className="card-body">
                    <h5 className="card-title pt-4">{title}</h5>
                    <p className="card-text px-xl-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
