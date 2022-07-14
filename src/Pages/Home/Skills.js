import React from 'react';
import tailwind from '../../images/tailwind(1).png'
import daisy from '../../images/daisy-flower.jpg'

const Skills = () => {
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50 mt-28 mb-5">

                <div className="divider"><span className='text-5xl text-info font-bold'>SKILLS</span> </div>

            </div>
            <div className="flex flex-col w-full border-opacity-50  mt-5 mb-5">

                {/* <div className='text-center'>
                    <div ><span className='text-2xl text-secondary font-bold underline underline-offset-4'> What I Know </span> </div>
                </div> */}

            </div>
            <div class="hero min-h-screen lg:bg-base-200 sm:bg-base-0">
           

                <div class="hero-content flex-col lg:flex-row">

                    <div className='w-96 mr-16 bg-white h-99 p-10 rounded-lg animate__animated animate__lightSpeedInLeft'>
                        <h1 className='text-xl text-secondary font-bold'>My creative skills & experiences:</h1>
                        <p className='text-primary font-bold'>
                            As a fullstack web developer, everyone needs to know about frontend and backend technology. Over 3.5 years I have been working hard on various frontend and backend technologies. I also created Website front-end design from Figma with HTML5, CSS3, JavaScript,ReactJs etc. Below are links to some of the responsive sites I have created. You know...
                        </p>
                        <a href="https://github.com/afruzaakter">

                            <button className='btn btn-info mt-5 text-primary  font-bold'> <span className='text-xl'><i class="fab fa-github"></i> </span><span className='ml-3'>View Activity in GitHub</span></button>
                        </a>


                    </div>
                    <div className='bg-white p-5 m-5 rounded-lg animate__animated  animate__lightSpeedInRight'>
                        <div>
                            <div >
                                <p className='p-3 text-xl text-primary font-bold'><i class="fab fa-html5"></i> Html | <i class="fab fa-css3-alt"></i> CSS | <i class="fab fa-bootstrap"></i> Bootstrap <span className='ml-16  text-2xl'>95%</span> </p>
                            </div>
                            <progress class="progress progress-success w-96" value="90" max="100" ></progress>
                        </div>

                        <div>
                            <div >
                                <p className='p-3 text-xl text-primary font-bold'><i class="fab fa-js"></i> JavaScript | <span className='text-info font-bold'><i class="fab fa-react"></i></span> React <span className='ml-32 text-2xl'>90%</span> </p>
                            </div>
                            <progress class="progress progress-success w-96" value="90" max="100" ></progress>
                        </div>
                        <div>
                            <div >
                                <p className='p-3 text-xl text-primary font-bold'> <span><i class="fab fa-node-js"></i></span> Node.Js | MongoDB |  <span className='ml-32 text-2xl'>80%</span> </p>
                            </div>
                            <progress class="progress progress-success w-96" value="80" max="100" ></progress>
                        </div>
                        <div>
                            <div >
                                <p className='p-3 text-xl text-primary font-bold'><i class="fas fa-fire-alt"></i> Firebase | <i class="fab fa-git-alt"></i> Git | <i class="fab fa-github"></i> GitHub  <span className='ml-20 text-2xl'>95%</span> </p>
                            </div>
                            <progress class="progress progress-success w-96" value="90" max="100" ></progress>
                        </div>

                        <div>
                            <div >
                                <p className='p-3 text-xl text-primary font-bold'>
                                    <div className='flex gap-3'>
                                        <div className='flex gap-2'>
                                            <div>
                                                <img className='w-6' src={tailwind} alt="" />
                                            </div>
                                            <div>
                                                Tailwind
                                            </div>
                                        </div>
                                        <div className='flex gap-2'>
                                            <div>
                                                <img className='w-6' src={daisy} alt="" />
                                            </div>
                                            <div>
                                                DaisyUi
                                            </div>
                                        </div>
                                        <div>
                                            <span className='ml-32 text-2xl'>80%</span>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <progress class="progress progress-success w-96" value="80" max="100" ></progress>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;