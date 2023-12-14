import React from "react";
import { ACTIONS } from "./App.js";
import UpdateTodo from "./UpdateTodo.js";

const Todo = ({ todo, dispatch }) => {
  return (
    <div className="flex flex-col justify-center gap-6 items-center text-black sm:flex-row">
      <div
        className="flex flex-col  bg-violet-100 p-3 rounded-xl"
        style={{ color: todo.complete && "#B8B8B8" }}
      >
        <span>
          {todo.hour}:{todo.minutes} - {todo.day}({todo.date}/{todo.month})
        </span>
        <span className="font-bold">{todo.name}</span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-row gap-3 justify-center items-center">
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
        <UpdateTodo todo={todo} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Todo;
