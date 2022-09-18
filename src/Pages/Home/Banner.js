import React from 'react';
import banner from '../../images/template (1).png';


const Banner = () => {
    return (
        <div className=' bg-gray-100  border lg:mt-0 mt-36 lg:p-0 p-5 mybanner rounded '>
            <div className=" hero lg:min-h-screen  sm:bg-base-0">
                <div className="hero-content lg:gap-36  flex-col  lg:flex-row">

                   <div>
                        <div>
                            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-around ">
                                <div className='flex gap-5'>
                                <div className='bg-secondary w-8 h-8 rounded-full'>
                                        <a className='ml-2 text-xl text-white p-1 pt-2 font-bold' target='_blank' href="https://www.facebook.com/afruza.sonia.3/"><i className="fab fa-facebook-f pt-2"></i></a>
                                    </div>
                                    <div className='bg-neutral w-8 h-8 rounded-full'>
                                        <a className='ml-2  text-xl text-white' target='_blank' href="https://github.com/afruzaakter"><i className="fab fa-github"></i></a>
                                    </div>
                                    
                                    <div className='bg-info w-8 h-8 rounded-full'>
                                        <a className=' text-xl p-2 text-primary' target='_blank' href="https://www.linkedin.com/in/afruza-akter-sonia-73ab70200/"><i className="fab fa-linkedin-in"></i></a>
                                    </div>

                                    <div className='bg-primary w-8 h-8 rounded-full'>
                                        <a className=' text-xl text-white p-1 pt-2 font-bold' target='_blank' href="https://www.facebook.com/afruza.sonia.3/"><i class="fa-brands fa-discord"></i></a>
                                    </div>
                                </div>
                            </div>
                            <h1 className="sm:text-3xl text-xl text-3xl mt-3 font-bold animate__animated  animate__fadeInRightBig">Hi, I'm <span className='text-secondary text-3xl'>AFRUZA AKTER SONIA</span></h1>
                            <h1 className="text-3xl font-bold animate__animated  animate__fadeInLeftBig">Front-End <span className='text-secondary'>Developer</span></h1>
                            <p className="py-6 ">Knack of building applications with front and back end operations.</p>
                        </div>
                       <div className=''>
                       <button className="btn btn-outline  animate__animated  animate__fadeInTopLeft "> <a target='_blank' href="https://drive.google.com/file/d/1dP5qo20WdvjUubk6CtD-KUuHAyR0v04s/view?usp=sharing">Hire</a> </button>
                        <button className="btn btn-primary  ml-5 animate__animated  animate__fadeInTopLeft "> <a target='_blank' href="https://drive.google.com/file/d/1dP5qo20WdvjUubk6CtD-KUuHAyR0v04s/view?usp=sharing">Get Resume</a> </button>

                       </div>

                    </div>
                    <div className='mr-16 mt-8'>
                        <img src={banner} className="lg:max-w-sm md:max-w-lg  xl:mt-8 rounded-lg shadow-2xl animate__animated  animate__fadeInTopLeft" alt='banner' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;