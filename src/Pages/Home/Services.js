import React from 'react';

const Services = () => {
    return (
        <div className='mb-16 '>
            <div className="flex flex-col w-full border-opacity-50 mt-28 mb-16">

                <div className="divider"><span className='text-5xl text-info font-bold'>MY SERVICES</span> </div>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8'>
            <div class="card w-96  bg-white bg-base-500 shadow-xl  animate__animated  animate__fadeInTopLeft">
                    <figure class="px-10 pt-10">
                   <span className='text-5xl text-secondary'> <i class="fas fa-fill-drip"></i></span>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-secondary  font-bold">Web Design</h2>
                        <p className='text-xl  text-gray-700'>A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good</p>
                        
                    </div>
                </div>
                <div class="card w-96 bg-white bg-base-500 shadow-xl  animate__animated  animate__zoomInDown">
                    <figure class="px-10 pt-10">
                   <span className='text-5xl text-secondary'> <i class="fas fa-business-time"></i></span>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-secondary  font-bold">Front-end Developer</h2>
                        <p className='text-xl  text-gray-700'>A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good</p>
                        
                    </div>
                </div>
                <div class="card lg:w-96 sm:w-80 mr-4 bg-white bg-base-500 shadow-xl  animate__animated  animate__fadeInTopRight">
                    <figure class="px-10 pt-10">
                   <span className='text-5xl text-secondary'> <i class="fas fa-laptop-code"></i></span>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-secondary  font-bold">Back-end Developer</h2>
                        <p className='text-xl  text-gray-700'>A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good</p>
                        
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Services;