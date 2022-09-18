import React from 'react';
import useProject from '../../hooks/useProject';
import ProjectDetails from './ProjectDetails';
import ShowProject from './ShowProject';


const Projects = () => {
    const [project, setProject] = useProject()
    return (
        <div>
            <div>
                <div ><h1 className='lg:text-5xl text-3xl text-center text-secondary font-bold mt-20 '>MY PROJECTS</h1> </div>
                <div className='flex justify-center items-center mt-2'>
                    <div className='flex justify-center mt-2'>
                        <div className=' border border-secondary  lg:w-28 w-14'>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className=' border border-primary h-4 rounded bg-primary  w-16 '>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className=' border border-secondary  lg:w-28 w-14'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid m-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 animate__animated  animate__zoomInDown'>

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