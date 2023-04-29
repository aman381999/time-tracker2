import React, { useState } from 'react'

export const Task = () => {
    const [ projects, setProjects ] = useState(JSON.parse(localStorage.getItem('projects')));
    const [selectedProject, setSelectedProject] = useState('');
    const [taskName, setTaskName] = useState('');
    const [timeSpent, setTimeSpent] = useState(0);
    const [description, setDescription] = useState('');

    const handleProjectChange = (event) => {
        setSelectedProject(event.target.value);
    };

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleTimeSpentChange = (event) => {
        setTimeSpent(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskName.trim() !== '') {
            const newTask = {
                name: taskName,
                time: parseFloat(timeSpent),
                description: description
            };
            const updatedProjects = projects.map((project) => {
                if (project.name === selectedProject) {
                    return { ...project, tasks: [...project.tasks, newTask] };
                }
                return project;
            });
            setProjects(updatedProjects);
            localStorage.setItem('projects', JSON.stringify(updatedProjects))
            setSelectedProject('');
            setTaskName('');
            setTimeSpent(0);
            setDescription('');
        }
    };

    // useEffect(() => {
    // }, [projects])
    

    console.log(projects)
    return (
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Project:
                    <select value={selectedProject} onChange={handleProjectChange}>
                        <option value="">Select Project</option>
                        {projects && projects.map((project) => (
                            <option key={project.name} value={project.name}>
                                {project.name}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Task Name:
                    <input type="text" value={taskName} onChange={handleTaskNameChange} />
                </label>
                <br />
                <label>
                    Time Spent (in hours):
                    <input type="number" step="0.5" value={timeSpent} onChange={handleTimeSpentChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={handleDescriptionChange} />
                </label>
                <br />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
