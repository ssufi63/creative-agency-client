import React from 'react';
import fakeData from '../../../fakeData'
import ServiceList from '../ServiceList/ServiceList';

const Services = () => {
    return (
        <div className=" py-5" >
            <div className="container py-xl-3">
                <h1 className="text-center"><span style={{ color: '#171B4E' }}>Provide awesome </span>
                    <span style={{ color: '#7AB259' }}>services</span>
                </h1>
                <div className="pt-5">
                    <div className="row" style={{'margin-right': '30px'}}>
                        {
                            fakeData.map(data => <ServiceList data={data} key={data.id} ></ServiceList>)
                        }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Services;