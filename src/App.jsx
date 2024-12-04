

import { Route, Routes } from 'react-router-dom'
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import AllTasks from './components/AllTasks';
import CompleteTask from './components/CompleteTask';
import InProgressTask from './components/InProgressTask';
import Dashboard from './components/Dashboard';
import PendingTask from './components/PendingTask';
import Deployed from './components/Deployed';
import Deferred from './components/Deferred';
import EditTask from "./components/EditTask";
import './App.css'


const App = () => {

  return (

    <div className='flex h-full'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/tasks" element={<AllTasks />} />
        <Route path="/editTask/:id" element={<EditTask />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/pendingTask" element={<PendingTask />} />
        <Route path="/deployedTask" element={<Deployed />} />
        <Route path="/deferredTask" element={<Deferred />} />
        <Route path="/inProgressTask" element={<InProgressTask />} />
        <Route path="/statsTask" element={<Dashboard />} />
      </Routes>
    </div>

  );
};

export default App;