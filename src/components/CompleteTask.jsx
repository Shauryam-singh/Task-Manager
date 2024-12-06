// import TaskCard from "./TaskCard";
// import { useSelector } from 'react-redux';
// import { selectAllTasks } from '../store/taskSlice';
// import { Link } from "react-router-dom";

// const CompleteTask = () => {
//     const tasks = useSelector(selectAllTasks);
//     const completedTasks = tasks.filter(task => task.status === 'Completed');

//     return (
//         <div className="w-full max-w-6xl mx-auto px-6 py-10">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800">Completed Tasks</h1>

//             {completedTasks.length > 0 ? (
//                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 overflow-y-auto max-h-[70vh] px-4 sm:px-6 lg:px-8">
//                     {completedTasks.map(task => (
//                         <TaskCard
//                             key={task.id}
//                             id={task.id}
//                             title={task.title}
//                             description={task.description}
//                             startDate={task.startDate}
//                             endDate={task.endDate}
//                             status={task.status}
//                             assignee={task.assignee}
//                             priority={task.priority}
//                         />
//                     ))}
//                 </div>
//             ) : (
//                 <div className="text-center mt-32">
//                     <p className="text-gray-600 text-lg">
//                         No completed tasks found.{" "}
//                         <Link to="/addTask" className="text-indigo-500 font-medium hover:underline">
//                             Add a new task
//                         </Link>
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CompleteTask;





import TaskCard from "./TaskCard";
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../store/taskSlice';
import { Link } from "react-router-dom";

const CompleteTask = () => {
    const tasks = useSelector(selectAllTasks);
    const completedTasks = tasks.filter(task => task.status === 'Completed');

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800">Completed Tasks</h1>

            {completedTasks.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 overflow-y-auto max-h-[70vh] px-4 sm:px-6 lg:px-8">
                    {completedTasks.map(task => (
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
                <div className="text-center mt-32">
                    <p className="text-gray-600 text-lg">
                        No completed tasks found.{" "}
                        <Link to="/addTask" className="text-indigo-500 font-medium hover:underline">
                            Add a new task
                        </Link>
                    </p>
                </div>
            )}

            <div className="mt-10 flex justify-center gap-6">
                <Link
                    to="/addTask"
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add New Task
                </Link>
                <Link
                    to="/"
                    className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    View All Tasks
                </Link>
            </div>
        </div>
    );
};

export default CompleteTask;
