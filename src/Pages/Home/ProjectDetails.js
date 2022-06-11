import React, { useEffect, useState } from 'react';
import useProject from '../../hooks/useProject';

const ProjectDetails = ({projected}) => {
    const {id,name} = projected;

   
    return (
        <div className='mt-36'>
            <h1>Name:{name}</h1>
            <h1>Name:{name}</h1>
        </div>
    );
};

export default ProjectDetails;