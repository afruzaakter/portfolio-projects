import React from 'react';
import myprofile from '../../images/template (1).png'

const About = () => {
    return (
        <div>
            
            <div className="flex flex-col w-full border-opacity-50 mt-5 mb-5">
              
                <div className="divider"><span className='text-5xl text-info font-bold'>ABOUT</span> </div>
                
            </div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={myprofile} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">I am <span className='text-info'>AFRUZA AKTER SONIA</span></h1>
                        <p className="py-6">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                        <button className="btn btn-primary"> <a target='_blank' href="https://drive.google.com/file/d/1dP5qo20WdvjUubk6CtD-KUuHAyR0v04s/view?usp=sharing">Download Resume</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;