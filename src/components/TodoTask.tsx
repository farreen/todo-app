import React from "react";
import { todoListType } from "../utils/types";

type taskProps = {
  task: todoListType;
  completeTask(taskNameToDelete: string): void;
};

const TodoTask = ({ task, completeTask }: taskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadLine}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};
export default TodoTask;
