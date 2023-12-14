import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD: "add-todo",
  TOGGLE: "toggle-todo",
  DELETE: "delete-todo",
  UPDATE: "update-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        {
          id: Date.now(),
          name: action.payload.name,
          complete: false,
          date: date.getDate(),
          day: weekday[date.getDay()],
          hour: date.getHours(),
          minutes: date.getMinutes(),
          month: date.getMonth(),
        },
      ];
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
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
      });
    default:
      console.log("Ekhane");
      return todos;
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, [{id: 1,
    name: "Morning Walk",
    complete: false,
    date: date.getDate(),
    day: weekday[date.getDay()],
    hour: date.getHours(),
    minutes: date.getMinutes(),
    month: date.getMonth()},{id: 2,
      name: "Complete the assignment",
      complete: false,
      date: date.getDate(),
      day: weekday[date.getDay()],
      hour: date.getHours(),
      minutes: date.getMinutes(),
      month: date.getMonth(),}]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 1) {
      dispatch({ type: ACTIONS.ADD, payload: { name: name } });
    }
    setName("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mt-20 gap-6 sm:flex-row"
      >
        <input
          className="input input-bordered input-warning w-3/5 sm:w-1/5"
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

const date = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default App;
