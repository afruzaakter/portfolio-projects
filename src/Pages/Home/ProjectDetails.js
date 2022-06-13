import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import slider2 from '../../images/Project/-project-2.jpg';
import slider3 from '../../images/Project/project-1.jpg';


// import Slider from "react-slick";

const ProjectDetails = () => {
    const { id } = useParams();

    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        const url = `https://thawing-everglades-96572.herokuapp.com/project/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='mt-36 p-10'>

            <div class="min-h-screen  bg-base-200">
                <div className='flex justify-center '>
                    {/* <img className='w-96' src={services.img} alt="" /> */}

                    <div class="carousel w-96 mt-6">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src={services.img} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle">❮</a>
                                <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src={slider2} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle">❮</a>
                                <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src={slider3} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle">❮</a>
                                <a href="#slide4" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div class="hero-content flex-col lg:flex-row">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div className='w-96 gap-2'>
                            <h1 class="text-5xl font-bold">{services.name}</h1>
                            <p class="py-6">{services.description}</p>
                           <div className='flex gap-5'>
                           <div>
                           <a href={services.livelink} class="btn btn-primary" target='_blank' >Live Link</a>
                           </div>
                            <div>
                           <a href="https://github.com/afruzaakter" class="btn btn-primary" target='_blank' >Client </a>
                           </div>
                            <div>
                           <a href="https://github.com/afruzaakter" class="btn btn-primary btn-md" target='_blank' > Server</a>
                           </div>
                           </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-secondary text-2xl font-bold'>Technology Uses:</p>
                         <ul className='mt-5'>
                           <div className='flex gap-4'>
                           <li className='btn btn-outline btn-success'>✦ {services.html}</li> 
                            <li  className='btn btn-outline btn-secondary'>✦ {services.tailwind}</li>
                            <li  className='btn btn-outline btn-info'>✦ {services.daisy}</li>
                           </div>
                           <div className='flex gap-4 mt-5'>
                           <li className='btn btn-outline btn-success'>✦ {services.react}</li> 
                            <li  className='btn btn-outline btn-secondary'>✦ {services.firebase}</li>
                            <li  className='btn btn-outline btn-info'>✦ {services.mongo}</li>
                           </div>
                           <div className='flex gap-4 mt-5'>
                           <li className='btn btn-outline btn-success'>✦ {services.hook}</li> 
                            <li  className='btn btn-outline btn-secondary'>✦ {services.express}</li>
                            <li  className='btn btn-outline btn-info'>✦ {services.node}</li>
                           </div>
                           
                            
                         </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default ProjectDetails;