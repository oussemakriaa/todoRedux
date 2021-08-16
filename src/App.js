import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList.js/TaskList';
import Filter from './Components/Filter/Filter';

function App() {
  return (
    <div className="app">
      <h1>todo app</h1>
      <Filter/>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
