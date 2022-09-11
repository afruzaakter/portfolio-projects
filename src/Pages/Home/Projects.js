import React from 'react';
import useProject from '../../hooks/useProject';
import ProjectDetails from './ProjectDetails';
import ShowProject from './ShowProject';
// import bg from '../../images/Project/Untitled design (19).png';
// import bg1 from '../../images/Project/project-1.jpg';
// import bg2 from '../../images/Project/-project-2.jpg';

const Projects = () => {
    const [project, setProject] = useProject()
    return (
        <div>
            <div>
                <div ><h1 className='text-5xl text-center text-secondary font-bold mt-20 '>MY PROJECTS</h1> </div>
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
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 animate__animated  animate__zoomInDown'>

            {
                project?.map(projects => <ShowProject
                key={projects.id}
                projects = {projects}
                ></ShowProject>)
            }

            </div>

            {/* <div>
                {
                    project?.map(projected => <ProjectDetails
                    key={projected.id}
                    projected = {projected}
                    ></ProjectDetails> )
                }
            </div> */}
        </div>
    );
};

export default Projects;