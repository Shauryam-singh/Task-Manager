import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateTask } from "../store/taskSlice";

const EditTask = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const task = useSelector((state) =>
        state.tasks.find((task) => task.id.toString() === id)
    );

    const [formData, setFormData] = useState({
        title: task?.title || "",
        description: task?.description || "",
        startDate: task?.startDate ? new Date(task.startDate) : new Date(),
        endDate: task?.endDate ? new Date(task.endDate) : null,
        status: task?.status || "Pending",
        assignee: task?.assignee || "",
        priority: task?.priority || "P0",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStartDateChange = (date) => {
        if (date instanceof Date && !isNaN(date)) {
            setFormData({ ...formData, startDate: date });
        }
    };

    const handleEndDateChange = (date) => {
        setFormData({ ...formData, endDate: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTask = {
            ...formData,
            id: Number(id),
            startDate: formData.startDate.toISOString(),
            endDate: formData.endDate ? formData.endDate.toISOString() : null,
        };
        dispatch(updateTask(updatedTask));
        navigate("/");
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Edit Task</h1>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Task Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Task Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 h-24"
                            required
                        ></textarea>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">Start Date</label>
                            <DatePicker
                                selected={formData.startDate}
                                onChange={handleStartDateChange}
                                dateFormat="dd/MM/yyyy"
                                className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">End Date</label>
                            <DatePicker
                                selected={formData.endDate}
                                onChange={handleEndDateChange}
                                dateFormat="dd/MM/yyyy"
                                className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            />
                        </div>
                    </div>

                    {/* Status and Priority */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="status" className="block text-sm font-semibold text-gray-700">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Deployed">Deployed</option>
                                <option value="Deferred">Deferred</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="priority" className="block text-sm font-semibold text-gray-700">Priority</label>
                            <select
                                id="priority"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            >
                                <option value="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTask;
