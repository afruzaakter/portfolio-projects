import React from 'react';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='p-16'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;