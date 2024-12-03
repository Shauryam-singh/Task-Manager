import { useState } from 'react';
import { store } from '../store/store';
import TaskList from './TaskList';
import { addTask } from '../store/taskSlice';

const Home = () => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleAddTask = () => {
        if (newTaskTitle.trim()) {
            store.dispatch(
                addTask({
                    title: newTaskTitle.trim(),
                    description: newTaskDescription.trim(),
                })
            );
            setNewTaskTitle('');
            setNewTaskDescription('');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Task Manager
            </h1>
            <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-md">
                <div className="mb-4">
                    <input
                        type="text"
                        value={newTaskTitle}
                        onChange={(event) => setNewTaskTitle(event.target.value)}
                        placeholder="Task Title"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        value={newTaskDescription}
                        onChange={(event) => setNewTaskDescription(event.target.value)}
                        placeholder="Task Description (optional)"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={3}
                    />
                </div>
                <button
                    onClick={handleAddTask}
                    className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
                >
                    Add Task
                </button>
            </div>
            <div className="mt-10">
                <TaskList />
            </div>
        </div>
    );
};

export default Home;
