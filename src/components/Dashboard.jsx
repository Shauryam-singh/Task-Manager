import { useSelector } from 'react-redux';
import Card from './Card'; // Import the correct Card component

const Dashboard = () => {
    const tasks = useSelector(state => state.tasks); // Get tasks from Redux store

    // Calculate the counts dynamically
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'Completed').length;
    const inProgressTasks = tasks.filter(task => task.status === 'In Progress').length;
    const pendingTasks = tasks.filter(task => task.status === 'Pending').length;
    const deployedTasks = tasks.filter(task => task.status === 'Deployed').length;
    const deferredTasks = tasks.filter(task => task.status === 'Deferred').length;

    const stats = [
        { label: "TOTAL TASK", total: totalTasks, bg: "bg-blue-600" },
        { label: "COMPLETED TASK", total: completedTasks, bg: "bg-teal-700" },
        { label: "TASK IN PROGRESS", total: inProgressTasks, bg: "bg-yellow-500" },
        { label: "PENDING", total: pendingTasks, bg: "bg-pink-600" },
        { label: "DEPLOYED", total: deployedTasks, bg: "bg-yellow-500" },
        { label: "DEFERRED", total: deferredTasks, bg: "bg-teal-700" },
    ];

    return (
        <div className="mx-auto w-[90%] lg:w-[80%] py-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800">Tasks Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stats.map(({ label, total, bg }, index) => (
                    <Card key={index} bg={bg} label={label} count={total} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
