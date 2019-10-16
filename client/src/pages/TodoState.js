import React, { useState } from "react";
import HeaderBar from "../components/HeaderBar.js";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = text => {
    setTodos([...todos, { text }]);
  };

  const setDone = index => {
    setTodos(
      todos.map((t, i) => {
        return index === i ? { ...t, completed: !t.completed } : t;
      })
    );
  };

  return (
    <div>
      <HeaderBar />
      <div>Todo List using state</div>

      <form
        onSubmit={e => {
          e.preventDefault();

          addTodo(text);
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>

      {todos.map((t, i) => {
        return (
          <div
            key={i}
            onClick={e => {
              setDone(i);
            }}
            style={{ textDecoration: t.completed ? "line-through" : "" }}
          >
            {t.text}
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
