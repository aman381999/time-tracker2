import React, { useState } from 'react'

export const Project = () => {
    const [projects, setProjects] = useState([JSON.parse(localStorage.getItem('projects'))]);
    const [projectName, setProjectName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target)
        const newProject = { name: projectName, tasks: [] };
        var resArray = [];
        projects.forEach(elements => {
            if (elements != null && elements !== undefined && elements !== "") {
             resArray.push(elements);
            }
           });
        // console.log(resArray)

        localStorage.setItem('projects', JSON.stringify([...resArray, newProject]))  
        setProjects([...resArray, newProject]);
        setProjectName('');
    }

    const handleChange = (event) => {
        setProjectName(event.target.value);
    };
    return (
        <div>
            <h2>Add New Project</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Project Name:
                    <input type="text" value={projectName} onChange={handleChange} />
                </label>
                <button type="submit">Add Project</button>
            </form>
        </div>
    )
}
