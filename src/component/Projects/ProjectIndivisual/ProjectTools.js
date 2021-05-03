import React from 'react';

const ProjectTools = ({tools}) => {
    return (
        <div>
            <h3>Tools</h3>
            {/* <hr style={{width:100}}/> */}
            <p>{tools}</p>        
        </div>
    );
};

export default ProjectTools;