// import { useSelector } from 'react-redux';
// import Card from './Card'; // Import the correct Card component

// const Dashboard = () => {
//     const tasks = useSelector(state => state.tasks); // Get tasks from Redux store

//     // Calculate the counts dynamically
//     const totalTasks = tasks.length;
//     const completedTasks = tasks.filter(task => task.status === 'Completed').length;
//     const inProgressTasks = tasks.filter(task => task.status === 'In Progress').length;
//     const pendingTasks = tasks.filter(task => task.status === 'Pending').length;
//     const deployedTasks = tasks.filter(task => task.status === 'Deployed').length;
//     const deferredTasks = tasks.filter(task => task.status === 'Deferred').length;

//     const stats = [
//         { label: "TOTAL TASK", total: totalTasks, bg: "bg-blue-status" },
//         { label: "COMPLETED TASK", total: completedTasks, bg: "bg-teal-status" },
//         { label: "TASK IN PROGRESS", total: inProgressTasks, bg: "bg-yellow-status" },
//         { label: "PENDING", total: pendingTasks, bg: "bg-pink-status" },
//         { label: "DEPLOYED", total: deployedTasks, bg: "bg-yellow-status" },
//         { label: "DEFERRED", total: deferredTasks, bg: "bg-teal-status" },
//     ];

//     return (
//         <div className="mx-auto w-[90%] lg:w-[80%] py-8 bg-[var(--bg-primary)]">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-[var(--text-primary)]">
//                 Tasks Overview
//             </h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {stats.map(({ label, total, bg }, index) => (
//                     <Card key={index} bg={bg} label={label} count={total} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card'; // Ensure this points to the correct Card component

const Dashboard = () => {
    const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store

    // Calculate the counts dynamically
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
    const inProgressTasks = tasks.filter((task) => task.status === 'In Progress').length;
    const pendingTasks = tasks.filter((task) => task.status === 'Pending').length;
    const deployedTasks = tasks.filter((task) => task.status === 'Deployed').length;
    const deferredTasks = tasks.filter((task) => task.status === 'Deferred').length;

    const stats = [
        { label: 'TOTAL TASKS', total: totalTasks, bg: 'bg-blue-status' },
        { label: 'COMPLETED TASKS', total: completedTasks, bg: 'bg-teal-status' },
        { label: 'TASKS IN PROGRESS', total: inProgressTasks, bg: 'bg-yellow-status' },
        { label: 'PENDING', total: pendingTasks, bg: 'bg-pink-status' },
        { label: 'DEPLOYED', total: deployedTasks, bg: 'bg-yellow-status' },
        { label: 'DEFERRED', total: deferredTasks, bg: 'bg-teal-status' },
    ];

    return (
        <div className="mx-auto w-[90%] lg:w-[80%] py-8 bg-[var(--bg-primary)]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-[var(--text-primary)]">
                Tasks Overview
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stats.map(({ label, total, bg }, index) => (
                    <Card key={index} bg={bg} label={label} count={total} />
                ))}
            </div>

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

export default Dashboard;
