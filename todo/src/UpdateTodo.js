import { useState } from "react";
import { ACTIONS } from "./App.js";


const UpdateTodo = ({todo, dispatch}) => {
  const [isEditing, setIsEditing] = useState(false);
  
  if (isEditing) {
    return (
      <>
        <input
          type="text"
          value={todo.name}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.UPDATE,
              payload: { name: e.target.value, id: todo.id},
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    // {todo.name}
    return <button onClick={() => setIsEditing(true)}>Edit</button>;
  }
};

export default UpdateTodo