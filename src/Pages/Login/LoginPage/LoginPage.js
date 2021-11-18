import React, { useState } from 'react';
import { NavLink, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import './LoginPage.css'

const LoginPage = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const location = useLocation()
    const {logInWithEmail} = useAuth()
    const hendleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData)
    }
    return (
        <div>
            <NavBar />
            <div className="rowcontainer-fluid mt-5 min-h-50">
                <div className="col-lg-6 col-sm-12 mx-auto">
                    <h2 className="text-center">Please Login</h2>
                <form id="form-make-admin">
                    <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-control" placeholder="Enter your email" name="email" onBlur={hendleBlur }/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">PassWord</label>
                        <input type="text" class="form-control" placeholder="Enter your Passwoed" name="pass" onBlur={hendleBlur}/>
                    </div>
                </form>
                <NavLink to="singup" className="nav-link"><p>Create An Account</p> </NavLink>   
                <button className="btn bg-info" onClick={()=>logInWithEmail(loginData, history, location)}>Login</button>    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginPage;