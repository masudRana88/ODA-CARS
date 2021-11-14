import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageCar from '../ManageCar/ManageCar';
import SideBar from '../SideBar/SideBar';
import UplodeCar from '../Uplode/UplodeCar';
import './Dashbord.css'

const Dashbord = () => {
    let { path, url } = useRouteMatch();
    return (
        <div class="">
            <NavBar/>
            <div class="bg-secondary">
                <h2 class="text-center text-info p-2">Dashbord</h2>
            </div>
            <div className="container-fluid">
                <div class="row ">
                    <SideBar url={url}/>
                    
                    <div className="col-10">
                    <Switch>
                        <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/uplode`}>
                           <UplodeCar/>        
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                           <MakeAdmin/>        
                        </Route>
                        <Route path={`${path}/managecar`}>
                           <ManageCar/>        
                        </Route>
                    </Switch>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Dashbord;