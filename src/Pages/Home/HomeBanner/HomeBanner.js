import React from 'react';
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className="container-fluid home-banner" style={{ "background": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://user-images.githubusercontent.com/86189450/141413953-6aea46a3-bf79-4b13-89de-9b47231f2e5d.jpg')", "background-size": "cover"}}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 banner-info">
                    <p>--- Welcome to ODA Car store</p>
                    <h1 className="">
                        Buy The Beat Qulity car's with us
                    </h1>
                    <button className="btn bg-info mt-5 ">See all Car</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;