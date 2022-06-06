import React, { useState ,useEffect} from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import style from "./todo.module.css";
import { v4 as uuidv4 } from "uuid";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [completeArr, setComplete] = useState([]);
  

  const saveInfo = (newTodo) => {
    fetch("http://localhost:8080/todos", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodos([...todos, d]);
       
      });
      let deleted = completeArr.filter((todo) => todo.value !== newTodo);
     setComplete(deleted);
  };

  
 useEffect(()=>{
  fetch("http://localhost:8080/todos")
  .then((r) => r.json())
  .then((d)=>{
    console.log(d)
    setTodos(d)
  })
 },[])

 
  // const addTodo = (inputtodo) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: uuidv4(),
  //       value: inputtodo,
  //     },
  //   ]);
  //   let deleted = completeArr.filter((todo) => todo.value !== inputtodo);
  //   setComplete(deleted);
  // };



// completed todo its a function for when our task completed then its remove from the todos and put into complete Arr
  const Completed = (value) => {
    let newValue = todos.filter((todo) => todo.value !== value);
    setTodos(newValue);

    setComplete([...completeArr, { value: value, id: uuidv4() }]);
    //console.log(completeArr)
  };




// deletetdodo also a function for deleting todo from todos
  const deleteTodo = (value) => {
    //console.log(value);
    let arrayafterdelete = todos.filter((todo) => todo.value !== value);
    setTodos(arrayafterdelete);
  };




// completedTodoDelete function for deleteing the todo from completed todo
  const CompletedTodoDelete = (value) => {
    // console.log(value)
    let deleted = completeArr.filter((todo) => todo.value !== value);
    setComplete(deleted);
  };




  return (
    <div className={style.container}>
      
      <TodoHeader completeArr={completeArr} todos={todos} />
      <TodoInput addTodo={saveInfo} />
      <TodoList
        addTodo={saveInfo}
        todos={todos}
        deleteTodo={deleteTodo}
        completeArr={completeArr}
        Completed={Completed}
        CompletedTodoDelete={CompletedTodoDelete}
      />
    </div>
  );
};
