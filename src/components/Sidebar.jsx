import { GrTask } from "react-icons/gr";
import { MdDashboard, MdOutlineTaskAlt, MdPendingActions, MdCloudDone, 
         MdOutlineAccessTimeFilled, MdAddTask, MdQueryStats } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    return (
        <div className="bg-[var(--sidebar-bg)] min-h-[100vh] sm:min-h-screen w-[5rem] sm:w-[19rem] 
                        flex flex-col gap-4 roboto-regular transition-colors duration-200">
            <div className="flex items-center gap-2 justify-between px-6 h-16 text-white text-2xl font-bold mt-6">
                <div className="flex items-center gap-2">
                    <GrTask />
                    <span className='sm:block hidden'>
                        Task Manager
                    </span>
                </div>
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="p-2 rounded-full hover:bg-[var(--sidebar-hover)] transition-colors duration-200"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <FiSun className="text-2xl text-yellow-300" />
                    ) : (
                        <FiMoon className="text-2xl text-gray-300" />
                    )}
                </button>
            </div>
            <nav className="flex gap-10 justify-start">
                <ul className="py-6 flex flex-col justify-start">
                    <Link to='/' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdDashboard className="text-2xl" />
                        <span className='sm:block hidden'>Dashboard</span>
                    </Link>
                    <Link to='/completeTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdOutlineTaskAlt className="text-2xl" />
                        <span className='sm:block hidden'>Completed Tasks</span>
                    </Link>
                    <Link to='/pendingTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdPendingActions className="text-2xl" />
                        <span className='sm:block hidden'>Pending Tasks</span>
                    </Link>
                    <Link to='/inProgressTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <GrInProgress className="text-2xl" />
                        <span className='sm:block hidden'>In Progress Tasks</span>
                    </Link>
                    <Link to='/deployedTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdCloudDone className="text-2xl" />
                        <span className='sm:block hidden'>Deployed Tasks</span>
                    </Link>
                    <Link to='/deferredTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdOutlineAccessTimeFilled className="text-2xl" />
                        <span className='sm:block hidden'>Deferred Tasks</span>
                    </Link>
                    <Link to='/addTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdAddTask className="text-2xl" />
                        <span className='sm:block hidden'>Add New Tasks</span>
                    </Link>
                    <Link to='/statsTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdQueryStats className="text-2xl" />
                        <span className='sm:block hidden'>Task Stats</span>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
