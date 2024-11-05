import React, { useState } from "react";
import "./ToDoComponent.css";

const ToDoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const handleAction = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      addTodo();
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <br></br>
      <span>
        <input
          onKeyDown={handleAction}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Add your tasks here"
        ></input>
        <button onClick={addTodo}>Add</button>
      </span>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoComponent;
