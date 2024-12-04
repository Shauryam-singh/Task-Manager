import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskCompleted, removeTask } from '../store/taskSlice';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';

const TaskCard = ({
    id,
    title,
    description,
    startDate,
    endDate,
    status,
    assignee,
    priority,
}) => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.tasks.find(task => task.id === id));

    const [complete, setComplete] = useState(task?.completed || false);
    const [showDeleteModal, setShowDeleteModal] = useState(false); 

    useEffect(() => {
        setComplete(task?.completed);
    }, [task?.completed]);

    const getDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    };

    const startDateFormatted = getDate(startDate);
    const endDateFormatted = getDate(endDate);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-200 text-green-800';
            case 'in progress':
                return 'bg-blue-200 text-blue-800';
            case 'pending':
                return 'bg-yellow-200 text-yellow-800';
            case 'deferred':
                return 'bg-gray-200 text-gray-800';
            case 'deployed':
                return 'bg-purple-200 text-purple-800';
            default:
                return 'bg-white';
        }
    };

    const handleToggleCompleted = () => {
        dispatch(toggleTaskCompleted(id));
        setComplete(!complete);
    };

    const handleDeleteClick = () => {
        setShowDeleteModal(true); 
    };

    const handleConfirmDelete = () => {
        dispatch(removeTask(id)); 
        setShowDeleteModal(false); 
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false); 
    };

    return (
        <div className="relative flex flex-col rounded-xl justify-center gap-4 bg-white w-full sm:w-72 max-h-[370px] shadow-xl border">
            {/* Delete Icon */}
            <button
                onClick={handleDeleteClick}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 z-10"
            >
                <AiOutlineDelete className="w-6 h-6" />
            </button>

            {/* Status Section */}
            <Link to={`/tasks/${id}`} className="task-card-link">
                <div
                    className={`relative bg-clip-border mt-6 ml-4 mr-4 rounded-lg ${getStatusColor(status)} shadow-md h-45`}>
                    <h1 className="anton-regular text-end pt-2 pr-3 text-sm">{priority}</h1>
                    <h1 className="font-bold text-center text-xl py-4 mb-5 ubuntu-bold">{title}</h1>
                </div>
            </Link>

            {/* Task Details */}
            <div className="border-0 p-2 text-center">
                <p className="poppins-light">{description}</p>
                <div className="flex flex-col sm:flex-row justify-between mt-[5px] text-sm font-semibold py-2 px-4">
                    <div className="flex justify-center flex-col">
                        <p>Start Date</p>
                        <p className="font-light">{startDateFormatted}</p>
                    </div>
                    <div className="flex justify-center flex-col mt-4 sm:mt-0">
                        <p>End Date</p>
                        <p className="font-light">{endDateFormatted}</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer p-3 flex items-center justify-between">
                <Link
                    to={`/editTask/${id}`}
                    className="text-blue-500 hover:underline"
                >
                    Edit
                </Link>
                <p className="font-light text-xs block text-black">{assignee || 'Mr. IDK'}</p>
                <button
                    onClick={handleToggleCompleted}
                    type="button"
                    className={`flex items-center justify-center gap-2 text-black select-none focus:outline-none shadow-md uppercase font-bold text-xs py-2 px-6 rounded-lg ${complete
                        ? 'bg-green-200 text-green-800'
                        : `${getStatusColor(status)}`}`}>
                    {complete ? 'Completed' : status}
                </button>
            </div>

            {/* Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold">Are you sure you want to delete this task?</h2>
                        <div className="mt-4 flex justify-end gap-4">
                            <button onClick={handleCancelDelete} className="bg-gray-300 p-2 rounded-md">Cancel</button>
                            <button onClick={handleConfirmDelete} className="bg-red-500 text-white p-2 rounded-md">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

TaskCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    assignee: PropTypes.string,
    priority: PropTypes.string,
};

export default TaskCard;
