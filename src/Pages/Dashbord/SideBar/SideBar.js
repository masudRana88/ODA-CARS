import React from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css'
const SideBar = (props) => {
    
    return (
        <div className="col-lg-2 col-sm-12 dashbord-side bg-secondary">
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
        </div>
    );
};

export default SideBar;