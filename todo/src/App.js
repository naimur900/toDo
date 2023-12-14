import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD: "add-todo",
  TOGGLE: "toggle-todo",
  DELETE: "delete-todo",
  UPDATE: "update-todo",
};

// const updateTodo= (todo)=>{

// }

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos,  { id: Date.now(), name: action.payload.name, complete: false, date: date.getDate(), day: weekday[date.getDay()], hour: date.getHours(), minutes: date.getMinutes(), month: date.getMonth()}];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    case ACTIONS.UPDATE:
      return todos.map(todo=>{
        if(todo.id === action.payload.id){
          return { ...todo, name: action.payload.name }
        }
      });
    default:
      console.log("Ekhane");
      return todos;
  }
};


const App = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { name: name } });
    setName("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-20 gap-9"
      >
        <input
          className="input input-bordered input-warning w-full max-w-xs"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button class="btn btn-outline btn-accent" type="submit">
          Add
        </button>
      </form>
      <li className="flex flex-col items-center justify-center m-6 gap-9">
        {todos.map((todo) => {
          return (
            <ul>
              <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            </ul>
          );
        })}
      </li>
    </>
  );
};

const date = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export default App;
