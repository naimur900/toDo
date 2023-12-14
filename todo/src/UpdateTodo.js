import { useState } from "react";
import { ACTIONS } from "./App.js";

const UpdateTodo = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <>
        <input
          className="p-3 rounded-lg bg-slate-300"
          type="text"
          value={todo.name}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.UPDATE,
              payload: { name: e.target.value, id: todo.id },
            });
          }}
        />
        <button
          onClick={() => setIsEditing(false)}
          className="btn btn-outline btn-accent"
        >
          Save
        </button>
      </>
    );
  } else {
    return (
      <button onClick={() => setIsEditing(true)} className="btn btn-secondary">
        Edit
      </button>
    );
  }
};

export default UpdateTodo;
