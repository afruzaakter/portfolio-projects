import React from 'react';
import bg from '../../images/Project/autoStore.png';

const Projects = () => {
    return (
        <div className='mt-28 mb-28 '>
            <div className='mb-16'>
                <div className="divider"><span className='text-5xl text-info font-bold '>MY PROJECTS</span> </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div class="card w-96 bg-base-100 bg-white shadow-xl">
                    <figure className="px-10 pt-10 border-2 ">
                        <img className='border-red-600 ' src={bg} alt="Shoes"

                            class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 className='text-4xl text-primary font-bold'>Auto-Store</h1>
                        <p className='text-gray-600'>Build up by react.js and Firebase Authentication System.Backend Implemented with Express.js.Data stored Mongodb atlas, Data secured by JWT</p>
                        <p className='text-secondary text-2xl font-bold'>Technology Uses:</p>
                         <ul className='text-secondary'>
                           <div className='flex gap-4'>
                           <li>✦ TailwindCSS</li> 
                            <li>✦ DaisyUi</li>
                           </div>
                           <div className='flex gap-4'>
                           <li>✦ ReactJS</li> 
                           <li>✦ JavaScript(ES6)</li> 
                            
                           </div>
                           <div className='flex gap-4 '>
                           <li>✦ Firebase</li>
                           <li>✦ React Router Hook</li>
                           </div>
                           <div className='flex gap-4'>
                           <li>✦ MongoDB</li>
                            <li>✦ NodeJS</li>
                           </div>
                            
                         </ul>
                        <div class="card-actions">
                            <a href="https://assignment-12-ddb6e.web.app/" class="btn btn-primary" target='_blank' >Live Link</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bg} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">

                        <div class="card-actions">
                            <a href=" https://afruzaakter.github.io/First-assignment-html-and-css/index.html" class="btn btn-primary" target='_blank' >Live Link</a>

                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bg} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">

                        <div class="card-actions">
                            <a href="https://afruzaakter.github.io/Nasim-project/index.html" class="btn btn-primary" target='_blank' >Live Link</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;