import React, { useState } from "react";
import moment from "moment";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddToDo = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        date: moment(new Date()).format("DD/MM/YYYY"),
        time: moment(new Date()).format("HH:mm"),
        taskName: task,
      },
    ]);
    setTask("");
  };

  const noTasks = <h4> No TaskList present. Please add one. </h4>;

  const handleDelete = (e, id) => {
    const filteredTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(filteredTaskList);
  };

  const tasklist = taskList.map((task, index) => {
    return (
      <div className="Task-Section" key={index}>
        <div>
          <span>Date: {task.date} </span>
          <span>Time: {task.time} </span>
        </div>
        <div className="task-block">
          <p>{task.taskName}</p>
          <input
            type="button"
            value="Delete"
            onClick={(e) => handleDelete(e, task.id)}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="Todo-Add">
        <h2>Add To Todo</h2>
        <input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="button" onClick={handleAddToDo} value="Add Task" />
      </div>
      <div>{taskList.length > 0 ? tasklist : noTasks}</div>
    </div>
  );
};

export default Todo;
