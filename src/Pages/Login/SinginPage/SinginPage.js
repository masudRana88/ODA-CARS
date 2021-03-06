import React, { useState } from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const SinginPage = () => {
    const [singUpdata, setSingUpdata] = useState({role: 'user'});
    const { singInWithEmail, user } = useAuth()
    const hisotory = useHistory()
    const location = useLocation()
    const hendleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...singUpdata };
        newData[field] = value;
        setSingUpdata(newData)
    }
    const hendleSingup = (data, hisotory) => {
        singInWithEmail(data,hisotory )
    }
    return (
        <div>
        <NavBar />
            <div className="rowcontainer-fluid mt-5 min-h-50">
                <div className="col-lg-6 col-sm-12 mx-auto">
                    <h2 className="text-center">Please Sing Up</h2>
                <form id="form-make-admin">
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" placeholder="Enter your Full name" name="displayName" onBlur={ hendleBlur}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-control" placeholder="Enter your email" name="email" onBlur={ hendleBlur}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="text" class="form-control" placeholder="Enter your Password" name="password" onBlur={ hendleBlur}/>
                    </div>
                </form>
                <NavLink to="login" className="nav-link"><p>Allready have an Account</p> </NavLink>   
                <button className="btn bg-info text-light" onClick={()=>hendleSingup(singUpdata,hisotory)}>Sing up</button>    
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default SinginPage;