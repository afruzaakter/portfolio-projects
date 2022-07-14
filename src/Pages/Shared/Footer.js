import React from 'react';
import logo from '../../images/fav-icon.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
       
            <footer class="footer items-center p-4 xl:bg-neutral  text-neutral-content">
                <div class="items-center sm:grid-flow-col md:grid-flow-col lg:grid-flow-col">
                    <Link to='/home' className="btn btn-ghost normal-case text-xl ml-10">
                        <img className='w-10 mr-2' src={logo} alt="" />
                        AFRUZA  <span className='text-info ml-2'> AKTER SONIA</span> </Link>
                    <p className='ml-28 p-5 '>Copyright © 2022 - All right reserved</p>
                </div>
                <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-around ">
                    <div className='flex gap-5'>
                        <div className='bg-info w-12 rounded-full'>
                            <a className='ml-1 text-3xl p-2 text-primary' target='_blank' href="https://www.linkedin.com/in/afruza-akter-sonia-73ab70200/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className='bg-neutral w-12 rounded-full'>
                            <a className='ml-1 text-4xl text-white' target='_blank' href="https://github.com/afruzaakter"><i className="fab fa-github"></i></a>
                        </div>
                        <div className='bg-info w-12 h-12 rounded-full'>
                            <a className='ml-3 text-3xl text-white p-1 pt-2 font-bold' target='_blank' href="https://www.facebook.com/afruza.sonia.3/"><i className="fab fa-facebook-f pt-2"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        
    );
};

export default Footer;