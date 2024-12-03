import { useState } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskSlice";
import { Link } from "react-router-dom";
import { IoFilterSharp, IoClose } from "react-icons/io5";

const AllTasks = () => {
    const tasks = useSelector(selectAllTasks);
    const [startDate, setStartDate] = useState(null);
    const [toggle, settoggle] = useState(false);
    const [endDate, setEndDate] = useState(null);
    const [statusFilter, setStatusFilter] = useState("All");
    const [priorityFilter, setPriorityFilter] = useState("All");

    const filteredTasks = tasks.filter((task) => {
        const taskDate = new Date(task.startDate);
        const isDateInRange =
            (!startDate || taskDate >= startDate) &&
            (!endDate || taskDate <= endDate);
        const isStatusMatch =
            statusFilter === "All" || task.status === statusFilter;
        const isPriorityMatch =
            priorityFilter === "All" || task.priority === priorityFilter;
        return isDateInRange && isStatusMatch && isPriorityMatch;
    });

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold text-center text-gray-800">Task Board</h1>
            </div>
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={() => settoggle(!toggle)}
                    className="flex items-center p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition duration-300"
                >
                    {toggle ? <IoClose className="text-2xl" /> : <IoFilterSharp className="text-2xl" />}
                    <span className="ml-2 text-lg">{toggle ? "Close Filters" : "Open Filters"}</span>
                </button>
                <div className="text-indigo-600 font-medium text-lg">
                    All Tasks ({filteredTasks.length})
                </div>
            </div>
            <div
                className={`${toggle ? "block" : "hidden"} bg-gray-100 p-6 rounded-lg shadow-md mb-8 transition duration-300`}
            >
                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">Start Date</label>
                        <input
                            type="date"
                            value={startDate ? startDate.toISOString().split("T")[0] : ""}
                            onChange={(e) => setStartDate(new Date(e.target.value))}
                            className="bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">End Date</label>
                        <input
                            type="date"
                            value={endDate ? endDate.toISOString().split("T")[0] : ""}
                            onChange={(e) => setEndDate(new Date(e.target.value))}
                            className="bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                        >
                            <option value="All">All Status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Deployed">Deployed</option>
                            <option value="Deferred">Deferred</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">Priority</label>
                        <select
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                            className="bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                        >
                            <option value="All">All Priority</option>
                            <option value="P0">P0</option>
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                        </select>
                    </div>
                </div>
            </div>
            {filteredTasks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task) => (
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
                <div className="text-center mt-20">
                    <p className="text-lg text-gray-500">
                        No tasks found.{" "}
                        <Link to="/addTask" className="text-indigo-600 font-medium hover:underline">
                            Add a new task
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default AllTasks;
