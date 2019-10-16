import React, { useReducer, useState } from "react";
import { Link, withRouter } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return { todos: [...state.todos, { text: action.todo }] };
    case "done":
      return {
        todos: state.todos.map((t, i) => {
          return action.index === i ? { ...t, completed: !t.completed } : t;
        })
      };
    default:
      return state;
  }
};

function Todo() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");

  return (
    <div>
      <Link to="/">Back Home</Link>

      <form
        onSubmit={e => {
          e.preventDefault();

          dispatch({ type: "add-todo", todo: text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>

      {todos.map((t, index) => (
        <div
          onClick={e => {
            dispatch({ type: "done", completed: !t.completed, index });
          }}
          key={index}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

export default Todo;
