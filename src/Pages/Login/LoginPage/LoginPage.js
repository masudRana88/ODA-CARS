import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div>
            <NavBar />
            <div className="rowcontainer-fluid mt-5 min-h-50">
                <div className="col-lg-6 col-sm-12 mx-auto">
                    <h2 className="text-center">Please Login</h2>
                <form id="form-make-admin">
                    <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input type="text" class="form-control" placeholder="Enter your email" name="model"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">PassWord</label>
                        <input type="text" class="form-control" placeholder="Enter your Passwoed" name="model"/>
                    </div>
                </form>
                <p>All </p>    
                <button className="btn bg-info">Login</button>    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginPage;