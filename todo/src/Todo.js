import React from "react";
import { ACTIONS } from "./App.js";
const Todo = ({ todo, dispatch }) => {
//   console.log(todo.name);
  return (
    <div className="flex justify-center gap-6 items-center">
      <span style={{ color: todo.complete ? "gray" : "black" }} className="font-bold bg-violet-100 p-3 rounded">
        {todo.name}
      </span>
      <button
        className="btn btn-error"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        className="btn btn-warning"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
