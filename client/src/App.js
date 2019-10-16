import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TodoState from "./TodoState";
import TodoReducer from "./TodoReducer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/todostate" exact component={TodoState} />
        <Route path="/todoreducer" exact component={TodoReducer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
