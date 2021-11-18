import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './SideBar.css'
const SideBar = (props) => {
    const {user} = useAuth()
    return (
        <div className="col-lg-2 col-sm-12 dashbord-side bg-secondary">
            {
                user.role === "admin" ? <div>
                <div class="list-group mb-1">
                    <Link to={`${props.url}/uplode`} className="list-group-item list-group-item-action "> uplode Car</Link>
                </div>
                <div class="list-group mb-1">
                    <Link to={`${props.url}/managecar`} className="list-group-item list-group-item-action ">Manage Car</Link>
                </div>
                <div class="list-group mb-1">
                    <Link to={`${props.url}/makeadmin`} className="list-group-item list-group-item-action ">Make Admin</Link>
                </div>
                <div class="list-group mb1">
                    <Link to={`${props.url}/allorder`} className="list-group-item list-group-item-action ">Manage All order </Link>
                </div>
            </div> :
            <div>
                   <div class="list-group mb-1">
                        <Link to={`${props.url}/myorder`} className="list-group-item list-group-item-action ">My order</Link>
                    </div>
                   <div class="list-group mb-1">
                        <Link to={`${props.url}/review`} className="list-group-item list-group-item-action ">Review </Link>
                    </div>
                   <div class="list-group mb-1">
                        <Link to={`${props.url}/pay`} className="list-group-item list-group-item-action ">Pay</Link>
                    </div>
            </div>
            }
        </div>
    );
};

export default SideBar;