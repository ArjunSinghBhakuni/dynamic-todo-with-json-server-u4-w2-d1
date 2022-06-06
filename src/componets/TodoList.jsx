import React, { useState } from "react";
import { Todo } from "./Todo";
import style from "./todo.module.css";

import { ShowTodo } from "./ShowTodo";

export const TodoList = ({ todos, deleteTodo, Completed, completeArr,  CompletedTodoDelete , addTodo={addTodo}}) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.value}
          deleteTodo={deleteTodo}
          Completed={Completed}
          
        />
      ))}
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "hide Todo" : "show completed Todo"}
        </button>
        {show ? (
          <div>
            {completeArr.map((el) => (
              <ShowTodo value={el.value} key={el.id}  CompletedTodoDelete={CompletedTodoDelete} addTodo={addTodo} />
            ))}
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
};
