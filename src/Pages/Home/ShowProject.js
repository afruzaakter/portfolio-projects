import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowProject = ({ projects }) => {
    const { name, img, livelink, _id, server, client } = projects;
    const navigate = useNavigate();
    const handleProjectDetails = id => {
        navigate(`/projectdetails/${id}`)
    }
    return (
       
        <div className='mt-16'>
           
           <div class="card w-96 bg-base-100 bg-white shadow-xl">
                <figure className=" border-2 ">
                    <img className='border-red-600 ' src={img} alt="Shoes"

                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h1 className='text-3xl text-primary font-bold'>{name}</h1>
                    <p className='text-gray-600'>Build up by react.js and Firebase Authentication System.Backend Implemented with Express.js.Data stored Mongodb atlas, Data secured by JWT</p>

                    <div class="card-actions">
                        <div>
                            <a href={livelink} class="btn btn-primary" target='_blank' >Live Link</a>
                        </div>
                       

                        <div>
                        <a href={client} class="btn btn-primary" target='_blank' >Client</a>
                            {/* <button className="btn btn-primary" onClick={() => handleProjectDetails(_id)}>Details</button> */}
                        </div>

                        <div>
                            <a href={server} class="btn btn-primary" target='_blank' >Server</a>
                        </div>
                    </div>
                </div>
            </div> 
              

           
         </div> 
      
    );
};

export default ShowProject;