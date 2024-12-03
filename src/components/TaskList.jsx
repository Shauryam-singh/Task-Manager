import { useSelector } from 'react-redux';
import Task from './Task'; // Reference the Task component

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);

    if (tasks.length === 0) {
        return <div>No tasks available.</div>; // Empty state message
    }

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <Task key={task.id} {...task} /> // Spread task props
            ))}
        </ul>
    );
};

export default TaskList;
