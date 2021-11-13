import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Comments from '../Comments/Comments';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducr from '../HomeProducr/HomeProducr';

const HomePage = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <HomeBanner></HomeBanner>
            <HomeProducr></HomeProducr>
            <Comments></Comments>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;