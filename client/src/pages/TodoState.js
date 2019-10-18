import React, { useState } from "react";
import PageHeader from "../components/PageHeader.js";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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

      <FormGroup column>
        {todos.map((t, i) => {
          return (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  onClick={e => {
                    setDone(i);
                  }}
                />
              }
              label={t.text}
            />
          );
        })}
      </FormGroup>
    </PageHeader>
  );
}

export default Todo;
