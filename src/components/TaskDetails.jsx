import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TaskDetails = () => {
    const { id } = useParams(); // Get the task ID from the URL params
    const task = useSelector(state => state.tasks.find(task => task.id === parseInt(id)));

    const [taskDetails, setTaskDetails] = useState(task);

    useEffect(() => {
        if (!task) {
            // Optionally handle case where task doesn't exist
        } else {
            setTaskDetails(task);
        }
    }, [task, id]);

    if (!taskDetails) {
        return (
            <div className="w-full max-w-6xl mx-auto px-6 py-10">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold text-red-500">Task Not Found</h2>
                    <p className="mt-4 text-gray-600">The task you're looking for doesn't exist.</p>
                    <Link to="/tasks" className="text-indigo-600 mt-4 block">Back to Task List</Link>
                </div>
            </div>
        );
    }

    const getDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    };

    const startDateFormatted = getDate(taskDetails.startDate);
    const endDateFormatted = getDate(taskDetails.endDate);

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{taskDetails.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{taskDetails.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Start Date</h3>
                        <p className="text-gray-600">{startDateFormatted}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">End Date</h3>
                        <p className="text-gray-600">{endDateFormatted}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Status</h3>
                        <p className="text-gray-600">{taskDetails.status}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Priority</h3>
                        <p className="text-gray-600">{taskDetails.priority}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Assignee</h3>
                        <p className="text-gray-600">Mr. Shauryam</p>
                    </div>
                </div>

                <Link to={`/editTask/${taskDetails.id}`} className="mt-4 inline-block text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg py-2 px-6 text-lg font-semibold">
                    Edit Task
                </Link>
            </div>
        </div>
    );
};

export default TaskDetails;
