import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskSlice";
import { Link } from "react-router-dom";

const Deployed = () => {
    const tasks = useSelector(selectAllTasks);
    const deployedTasks = tasks.filter((task) => task.status === "Deployed");

    return (
        <div className="w-[90%] lg:w-[70%] mx-auto py-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-800">Deployed Tasks</h1>
            {deployedTasks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 overflow-y-auto h-[50vh] sm:h-[70vh]">
                    {deployedTasks.map((task) => (
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
                <div className="text-center mt-[20vh]">
                    <p className="text-lg text-gray-600">
                        No tasks found.{" "}
                        <Link to="/addTask" className="text-indigo-500 hover:underline">
                            Add a new task
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Deployed;
