import React from 'react';
import Banner from '../Banner/Banner';
import Blogs2 from '../Blogs2/Blogs2';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Blogs2></Blogs2>
            <Footer></Footer>
        </div>
    );
};

export default Home;