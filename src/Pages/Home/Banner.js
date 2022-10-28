import React from 'react';
import banner from '../../images/template (1).png';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    const handleType = (count: number) => {
        // console.log(count)}
      }
    
      const handleDone = () => {
        // console.log(`Done after 5 loops!`)
      }
    return (
        <div className=' bg-gray-100  border  mt-32  lg:p-0 p-5 mybanner rounded '>
            <div className="  lg:min-h-screen  sm:bg-base-0">
                <div className="hero-content  flex-col justify-between items-center  lg:flex-row">

                    <div className='ml-16'>
                        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-around mr-10">
                            <div>
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
                            
                            <h1 className="sm:text-3xl text-xl text-3xl mt-5 font-bold animate__animated  animate__fadeInRightBig">Hi, I'm <span className='text-secondary text-3xl'>AFRUZA AKTER SONIA</span></h1>

                            <h1 className='className="sm:text-3xl text-xl text-3xl py-5 font-bold' style={{ margin: 'auto 0',  }}>
                                Professional{' '}
                                <span className='text-secondary'>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['FRONT END DEVELOPER', 'BACK END DEVELOPER', 'REACT JS DEVELOPER', 'JAVASCRIPT DEVELOPER']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    />
                                </span>
                            </h1>






                        </div>
                        <div className=''>
                            <button className="btn btn-outline  animate__animated  animate__fadeInTopLeft "> <a target='_blank' href="https://drive.google.com/file/d/1dP5qo20WdvjUubk6CtD-KUuHAyR0v04s/view?usp=sharing">Hire</a> </button>
                            <button className="btn btn-primary  ml-5 animate__animated  animate__fadeInTopLeft "> <a target='_blank' href="https://drive.google.com/file/d/1dP5qo20WdvjUubk6CtD-KUuHAyR0v04s/view?usp=sharing">Get Resume</a> </button>

                        </div>

                    </div>
                    <div className=' mt-8 ml-16'>
                        <img src={banner} className="lg:max-w-sm mr-10 md:max-w-lg  xl:mt-8 rounded-lg shadow-2xl animate__animated  animate__fadeInTopLeft" alt='banner' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;