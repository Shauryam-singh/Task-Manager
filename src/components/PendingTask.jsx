import TaskCard from "./TaskCard";
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../store/taskSlice';
import { Link } from "react-router-dom";

const PendingTask = () => {
    const tasks = useSelector(selectAllTasks);
    const pendingTasks = tasks.filter(task => task.status === 'Pending');

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800">Pending Tasks</h1>
            {
                pendingTasks.length > 0 ? (
                    <div className="flex flex-wrap gap-6 justify-center mt-6 overflow-auto">
                        {pendingTasks.map(task => (
                            <TaskCard
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                startDate={task.startDate}
                                endDate={task.endDate}
                                status={task.status}
                                assignee={task.assignee}
                                priority={task.priority}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center mt-[20vh] sm:mt-[30vh]">
                        <p className="text-gray-600">
                            No tasks found.{" "}
                            <Link to="/addTask" className="text-indigo-500 hover:text-indigo-600 font-semibold">
                                Add a new task
                            </Link>
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default PendingTask;
