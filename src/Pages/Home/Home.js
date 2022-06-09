import React from 'react';
import About from './About';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='p-16'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;