import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import SidebarOne from '../../SidebarOne/SidebarOne';

const MakeAdmin = () => {
    const [loggedInUser] = useContext(UserContext);

    return (
<div className="makeAdmin">
            <div className="row">
                <SidebarOne></SidebarOne>
                <div className="col-md-10 col-sm-12 placeOrder">
                    <div className="col title">
                        <h4>Make Admin</h4>
                        <h4 className="ml-auto">{loggedInUser.name}</h4>
                    </div>
                    <div className="addService-card">
                        <div className="row">
                            <div className="mt-5 mb-5 col-md-8 col-sm-12">
                                <div className="container">
                                <form action="">
                                <div className="form-group">
                                    <label htmlFor="">Email Address</label>
                                    <input type="email" name="" id="" placeholder="Enter Email Address" />
                                </div>
                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;