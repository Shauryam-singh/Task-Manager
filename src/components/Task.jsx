import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTaskCompleted, removeTask, updateTask } from '../store/taskSlice';
import { useCallback } from 'react';

const Task = ({ id, title, completed, description, startDate, endDate, status, assignee, priority }) => {
    const dispatch = useDispatch();

    const handleToggleCompleted = useCallback(() => {
        dispatch(toggleTaskCompleted(id));
    }, [dispatch, id]);

    const handleRemoveTask = useCallback(() => {
        dispatch(removeTask(id));
    }, [dispatch, id]);

    const handleUpdateTask = useCallback((field, value) => {
        dispatch(updateTask({ id, [field]: value }));
    }, [dispatch, id]);

    const formatDate = (date) => {
        if (!date) return '---';
        const formattedDate = new Date(date);
        return formattedDate.toLocaleDateString(); // Format to default locale date format
    };

    return (
        <li className={`task ${completed ? 'completed' : ''} p-4 bg-white border rounded shadow-md`}>
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleToggleCompleted}
                    className="accent-indigo-500"
                />
                <span className="font-semibold text-lg flex-1">{title}</span>
            </div>
            <p className="mt-2 text-gray-600">{description}</p>
            <div className="flex gap-4 mt-2">
                <span className="text-sm text-rose-400">Start Date: {formatDate(startDate)}</span>
                <span className="text-sm text-gray-500">End Date: {formatDate(endDate)}</span>
            </div>
            <div className="flex gap-4 mt-2">
                <select
                    value={status}
                    onChange={(event) => handleUpdateTask('status', event.target.value)}
                    className="border p-1 rounded"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Deployed">Deployed</option>
                    <option value="Deferred">Deferred</option>
                </select>

                <input
                    type="text"
                    value={assignee}
                    onChange={(event) => handleUpdateTask('assignee', event.target.value)}
                    placeholder="Assignee"
                    className="border p-1 rounded"
                />

                <select
                    value={priority}
                    onChange={(event) => handleUpdateTask('priority', event.target.value)}
                    className="border p-1 rounded"
                >
                    <option value="">Priority</option>
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                </select>
            </div>

            <button
                onClick={handleRemoveTask}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
                Remove
            </button>
        </li>
    );
};

Task.propTypes = {
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    status: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
};

export default Task;
