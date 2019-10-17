import React, { useState } from "react";
import PageHeader from "../components/PageHeader.js";

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
    <PageHeader title="Todo List using state">
      <form
        onSubmit={e => {
          e.preventDefault();

          addTodo(text);
          setText("");
        }}
      >
        <input
          value={text}
          placeholder="Enter a todo"
          onChange={e => setText(e.target.value)}
        />
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
    </PageHeader>
  );
}

export default Todo;
