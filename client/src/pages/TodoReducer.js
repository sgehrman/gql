import React, { useReducer, useState } from "react";
import PageHeader from "../components/PageHeader.js";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
    <PageHeader title="Todo List using reducer">
      <form
        onSubmit={e => {
          e.preventDefault();

          dispatch({ type: "add-todo", todo: text });
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
        {todos.map((t, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                onChange={e => {
                  dispatch({
                    type: "done",
                    completed: e.target.checked,
                    index
                  });
                }}
              />
            }
            label={t.text}
          />
        ))}
      </FormGroup>
    </PageHeader>
  );
}

export default Todo;
