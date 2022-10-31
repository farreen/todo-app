import React, { FC, useState, ChangeEvent } from "react";
import "../App.css";
import TodoTask from "./TodoTask";
import { todoListType } from "../utils/types";

const TodoList: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoListType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadLine };
    setTodoList([...todoList, newTask]);
    console.log("todoList", todoList);
    setTask("");
    setDeadLine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            value={task}
            name="task"
            placeholder="Task..."
            onChange={handleChange}
          />
          <input
            type="number"
            value={deadLine}
            name="deadLine"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: todoListType) => {
          return <TodoTask task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
