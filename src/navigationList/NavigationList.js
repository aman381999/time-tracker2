import React, { useEffect, useState } from 'react'
import { Project } from '../activity/Project'
import { Task } from '../activity/Task'

export const NavigationList = () => {

    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')))
    const [totalTime, setTotalTime] = useState(0);

    // Calculate total time whenever tasks change
    let sum = 0;

    // useEffect(() => {
    //     projects.forEach(project => {
    //         project.tasks.forEach(task => {
    //             sum += task.time;
    //         });
    //     });
    //     setTotalTime(sum);
    // }, [projects]);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Total time</th>
                        <th>Task Name</th>
                        <th>Time Spent</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { projects && projects.map((project) => (
                        <React.Fragment key={project.name}>
                            <tr>
                                <td>{project.name}</td>
                                {
                                    projects && projects.map((project) => {                                        
                                        project.tasks.forEach(task => {
                                            sum += task.time;
                                        });
                                        return (
                                            <td>{sum}</td>

                                        )
                                    })
                                }
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {project.tasks.map((task) => (
                                <tr key={task.name}>
                                    <td></td>
                                    <td></td>
                                    <td>{task.name}</td>
                                    <td>{task.time}</td>
                                    <td>{task.description}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
