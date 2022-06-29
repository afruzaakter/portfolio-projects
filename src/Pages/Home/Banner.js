import React from 'react';
import banner from '../../images/about.png';

const Banner = () => {
    return (
        <div className='mt-16'>
            <section>
                <div className="hero min-h-screen bg-base-200 p-1 ">
                    <div className="hero-content ml-4  flex-col  lg:flex-row">
                        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='ml-10'>
                            <h1 className="text-5xl font-bold">Hi, I am <span className='text-info'>AFRUZA AKTER SONIA</span></h1>
                            <h1 className="text-4xl font-bold">Frontend <span className='text-info'>Developer</span></h1>
                            <p className="py-6">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                              <button className="btn btn-primary"> <a target='_blank' href="https://drive.google.com/file/d/1dP5qo20WdvjUubk6CtD-KUuHAyR0v04s/view?usp=sharing">Download Resume</a> </button>    

                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;