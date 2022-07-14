import React from 'react';
import myprofile from '../../images/template (1).png'
import Section from '../Shared/Section';

const About = () => {
    return (
        <div id='about'>
            
           <Section></Section>
            <div className="hero min-h-screen lg:bg-base-200 sm:bg-base-0">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={myprofile} className="max-w-sm rounded-lg shadow-2xl animate__animated animate__zoomInDown" />
                    <div>
                        <h1 className="text-5xl font-bold animate__animated animate__zoomIn ">I am <span class='text-info '>Web Developer</span></h1>
                        
                        <p className="py-6 animate__animated animate__pulse">Hi there,I am afruza akter sonia and I have been working on web design and development for 1 year.I am a student of CSE, try to develop the front end of a web application using React.js and back-end using Node.js with comfortable.Besides always ready to learn any new technology. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                        <button className='btn btn-info'> <a  target='_blank' href="https://www.facebook.com/messages/t/100024825075880?_rdc=1&_rdr">Hire Me</a> </button>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;