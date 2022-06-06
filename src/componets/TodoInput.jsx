import React, { useState } from "react";
import style from "./todo.module.css";
export const TodoInput = ({ addTodo }) => {
  const [newTodo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
    //console.log(newTodo)
  };
  return (
    <div>
      <input
        value={newTodo}
        type="type"
        placeholder="New Todo Item"
        onChange={handleChange}
      />

      <button
        onClick={() => {
          // console.log(newTodo)
          addTodo(newTodo);
          setTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
};
