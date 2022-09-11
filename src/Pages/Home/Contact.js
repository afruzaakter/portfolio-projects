import React from 'react';
const Contact = () => {
    return (
        <div>
        
            <div className='mt-20 mb-5'>
                <div ><h1 className='text-5xl text-center text-secondary font-bold '>CONTACT ME</h1> </div>
                <div>
                <div className='flex justify-center mt-2'>
                    <div className=' border border-primary  w-80 '>
                    </div>
                </div>
                <div className='flex justify-center mt-2'>
                    <div className=' border border-primary  w-80 '>
                    </div>
                </div>
            </div>
            </div>
            <div class="hero min-h-screen lg:bg-base-200 sm:bg-base-0 z-0">
                <div class="flex justify-around items-center gap-10 flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl  lg:bg-gray-300 sm:bg-base-0  animate__animated  animate__zoomInDown">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-xl">Your Name</span>
                                </label>
                                <input type="text" class="input input-bordered text-gray-600 bg-white text-xl" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-xl">Your Email</span>
                                </label>
                                <input type="email" class="input text-gray-600 bg-white text-xl input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-xl">Your Message</span>
                                </label>
                                <textarea className='rounded-xl text-xl text-gray-600 p-3' name="" id="" cols="20" rows="5"></textarea>

                            </div>
                          
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>


                    <div className=" rounded bg-gray-300  text-primary-content  animate__animated  animate__bounceInLeft">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-secondary ml-5 font-bold ">Contact With Me</h2>
                            <div className='flex gap-4'>
                                <div >
                                    <i class="fas fa-user-alt mt-3 text-secondary text-2xl"></i>
                                </div>
                                <div className=' text-gray-600 font-bold'>
                                    <p className='text-xl'>Name</p>
                                    <p>Afruza Akter Sonia</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div >
                                    <i class="fas fa-phone mt-3 text-secondary text-2xl"></i>

                                </div>
                                <div className=' text-gray-600 font-bold'>
                                    <p className='text-xl'>Cell/WhatsApp</p>
                                    <p>+8801743252685</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div >

                                    <i class="fas fa-envelope mt-3 text-secondary text-2xl "></i>
                                </div>
                                <div className=' text-gray-600 font-bold'>
                                    <p className='text-xl'>Email</p>
                                    <p>afruzaaktersonia@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div >

                                    <i class="fas fa-map-marker-alt mt-3 text-secondary text-2xl"></i>
                                </div>
                                <div className=' text-gray-600 font-bold'>
                                    <p className='text-xl'>Address</p>
                                    <p>Tangail, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div class="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;