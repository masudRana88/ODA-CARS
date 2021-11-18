import React from 'react';
import { Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router';
import AdminRoute from '../../../Hooks/AdminRout';
import PrivateRouter from '../../../Hooks/PrivateRoute';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageCar from '../ManageCar/ManageCar';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import SideBar from '../SideBar/SideBar';
import UplodeCar from '../Uplode/UplodeCar';
import './Dashbord.css'

const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth()
    const history = useHistory()
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
                        {
                                user?.role === "user"&&<Route exact path={path}>
                            <MyOrder/>
                        </Route>
                        }
                        <AdminRoute path={`${path}/uplode`}>
                           <UplodeCar/>        
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                           <MakeAdmin/>        
                        </AdminRoute>
                        <AdminRoute path={`${path}/managecar`}>
                           <ManageCar/>        
                        </AdminRoute>
                        <AdminRoute path={`${path}/allorder`}>
                           <ManageOrder/>        
                        </AdminRoute>
                        <PrivateRouter path={`${path}/pay`}>
                           <Pay/>       
                        </PrivateRouter>
                        <PrivateRouter path={`${path}/myorder`}>
                           <MyOrder/>       
                        </PrivateRouter>
                        <PrivateRouter path={`${path}/review`}>
                           <Review/>       
                        </PrivateRouter>
                    </Switch>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Dashbord;