import React from 'react';
import logo from '../../images/fav-icon.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <div class="items-center grid-flow-col">
  <Link to='/home' className="btn btn-ghost normal-case text-xl ml-10">
            <img className='w-10 mr-2' src={logo} alt="" />
            AFRUZA  <span className='text-info ml-2'> AKTER SONIA</span> </Link>
    <p className='ml-28'>Copyright © 2022 - All right reserved</p>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-around">
     <div className='flex gap-5'>
                                <div className='bg-info w-12 rounded-md'>
                                    <a className='ml-1 text-4xl text-primary' target='_blank' href="https://www.linkedin.com/in/afruza-akter-sonia-73ab70200/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <div className='bg-neutral w-12 rounded-md'>
                                    <a className='ml-1 text-4xl text-white' target='_blank' href="https://github.com/afruzaakter"><i className="fab fa-github"></i></a>
                                </div>
                                <div className='bg-info w-12 rounded-md'>
                                    <a className='ml-3 text-4xl text-white' target='_blank' href="https://www.facebook.com/afruza.sonia.3/"><i className="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;