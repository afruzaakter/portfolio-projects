import React from 'react';
import bg from '../../images/Project/autoStore.png';

const Projects = () => {
    return (
        <div className='mt-28 mb-28 '>
            <div className='mb-16'>
                <div className="divider"><span className='text-5xl text-info font-bold '>MY PROJECTS</span> </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bg} alt="Shoes"

                            class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 className='text-4xl text-secondary font-bold'>Auto-Store</h1>
                        <p>Technology Use: React-Router</p>
                        <div class="card-actions">
                            <a href="https://afruzaakter.github.io/Second-Assignment-influencer-gear/index.html" class="btn btn-primary" target='_blank' >Live Link</a>
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