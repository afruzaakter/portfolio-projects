import React from 'react';
import { Link } from 'react-router-dom';
import notfount from '../../images/404 image.png'
const NotFound = () => {
    return (
        <div className='mt-20 pl-2'>
            <img src={notfount} alt="" />
            <div className='mt-5 text-end mr-28'>
              
              <h4 className='text-info text-xl font-bold mb-3'>Try Search again or go to Home Page</h4>
               <Link  to="/home" className='btn btn-info text-xl'> Home Page</Link> 
             </div>
        </div>
    );
};

export default NotFound;