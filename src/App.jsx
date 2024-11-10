import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";

function App() {
  // State to hold the list of tasks
  const [toDoList, setToDoList] = useState([]);

  // Function to add a new task to the list
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  // Function to delete a task from the list
  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  // Function to toggle the 'checked' status of a task
  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <>
      <div className="container">
        <h1>Task Master</h1>

        {/* Input component to add new tasks */}
        <TaskInput addTask={addTask} />

        <div className="toDoList">
          <span>To Do :</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>

          {/* Notification message when all tasks are completed */}
          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      
      {/* Component to display statistics of the to-do list */}
      <Stats toDoList={toDoList} />
    </>
  );
}

export default App;
