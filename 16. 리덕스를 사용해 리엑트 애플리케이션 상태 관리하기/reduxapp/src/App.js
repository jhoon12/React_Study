import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Tood";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr />
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
