import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import "./NotFount.css"
const NotFount = () => {
    return (
        <div>
            <NavBar/>
        <div className="container h-100vh">
            <h3 className="mt-5 text-center text-danger">Sorry, This page is not found</h3>
        </div>
            <Footer/>    
        </div>
    );
};

export default NotFount;