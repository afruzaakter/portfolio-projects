import React from 'react';
import banner from '../../images/about.png';


const Banner = () => {
    return (
        <div>
                <div className="lg:ml-36 hero min-h-screen lg:bg-base-200 sm:bg-base-0">
                    <div className="hero-content    flex-col  lg:flex-row">
                        <img src={banner} className="max-w-sm xl:mt-8 rounded-lg shadow-2xl animate__animated  animate__fadeInTopLeft" alt='banner'/>
                        <div className='lg:ml-10 '>
                           <div>
                           <h1 className="sm:text-3xl text-xl text-3xl font-bold animate__animated  animate__fadeInRightBig">Hi, I am <span className='text-secondary text-3xl'>AFRUZA AKTER SONIA</span></h1>
                            <h1 className="text-3xl font-bold animate__animated  animate__fadeInLeftBig">Front-End <span className='text-secondary'>Developer</span></h1>
                            <p className="py-6 w-3/4">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                           </div>
                              <button className="btn btn-primary animate__animated  animate__fadeInTopLeft "> <a target='_blank' href="https://drive.google.com/file/d/1dP5qo20WdvjUubk6CtD-KUuHAyR0v04s/view?usp=sharing">Download Resume</a> </button>    

                        </div>
                    </div>
                </div>          
        </div>
    );
};

export default Banner;