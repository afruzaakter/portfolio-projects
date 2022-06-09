import React from 'react';
import banner from '../../images/about.png';
import github from '../../images/github.png';
const Banner = () => {
    return (
        <div className='mt-16'>
            <section>
                <div class="hero min-h-screen bg-base-200 p-1 ">
                    <div class="hero-content ml-4  flex-col  lg:flex-row">
                        <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                        <div className='ml-10'>
                            <h1 class="text-5xl font-bold">Hi, I am <span className='text-info'>AFRUZA AKTER SONIA</span></h1>
                            <p class="py-6">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                            <div className='flex gap-5'>
                               <div className='bg-info w-12 rounded-md'>
                               <a className='ml-1 text-4xl text-primary' target='_blank' href="https://www.linkedin.com/in/afruza-akter-sonia-73ab70200/"><i class="fab fa-linkedin-in"></i></a>
                               </div>
                               <div className='bg-neutral w-12 rounded-md'>
                               <a className='ml-1 text-4xl text-white' target='_blank' href="https://github.com/afruzaakter"><i class="fab fa-github"></i></a>
                               </div>
                               <div className='bg-info w-12 rounded-md'>
                               <a className='ml-3 text-4xl text-white' target='_blank' href="https://www.facebook.com/afruza.sonia.3/"><i class="fab fa-facebook-f"></i></a>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;