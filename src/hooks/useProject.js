import React, {useEffect, useState} from 'react';

const useProject = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        //   fetch('https://thawing-everglades-96572.herokuapp.com/project')
          fetch('data.json')
          .then(res => res.json())
          .then(data => setProject(data))
    }, [])

    return [project, setProject];
};

export default useProject;