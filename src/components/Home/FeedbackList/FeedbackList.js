import React from 'react';

const FeedbackList = ({data}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card  py-4 my-3" style={{border:'none'}}>
                <div>
                    <img src={data.image} style={{width:'60px'}} alt=""/>
                    <div>
                    <h3 className="card-title mb-1">{data.name}</h3>
						<h5 className="card-subtitle">{data.title}</h5>
                    </div>
                </div>
                <p className="card-txt m-0">{data.description}</p>
            </div>
            
        </div>
    );
};

export default FeedbackList;