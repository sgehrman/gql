import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoState from "./pages/TodoState";
import TodoReducer from "./pages/TodoReducer";
import Apollo from "./pages/Apollo.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/todostate" exact component={TodoState} />
        <Route path="/todoreducer" exact component={TodoReducer} />
        <Route path="/booklist" exact component={Apollo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
