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
        <div className='mt-28 mb-28 '>
            <div className='mb-16'>
                <div className="divider"><span className='text-5xl text-info font-bold '>MY PROJECTS</span> </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated  animate__zoomInDown'>

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