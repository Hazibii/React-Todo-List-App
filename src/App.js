import React from "react";
import "./App.css";
import TodoList from "./components/todo.component";

export default function App() {
  return (
    <div className="App">
      <TodoList name="John" />
    </div>
  );
}
