import React from "react";
import { ACTIONS } from "./App.js";
import UpdateTodo from "./UpdateTodo.js";





const Todo = ({ todo, dispatch }) => {
  
  return (
    <div className="flex justify-center gap-6 items-center text-black">
      <div className="flex flex-col  bg-violet-100 p-3 rounded-xl">
        <span>
          {todo.hour}:{todo.minutes} - {todo.day}({todo.date}/{todo.month})
        </span>
        <span
          className="font-bold"
          style={{ textDecoration: todo.complete && "line-through" }}
        >
          {todo.name}
        </span>
      </div>

      <button
        className="btn btn-error"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <UpdateTodo todo={todo} dispatch={dispatch}/>
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
