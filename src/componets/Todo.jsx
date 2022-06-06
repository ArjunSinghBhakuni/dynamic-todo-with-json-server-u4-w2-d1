import React from 'react'
import style from "./todo.module.css";
export const Todo = ({todo,deleteTodo,Completed}) => {
  return (
    <div className={style.eachtodo}>

     

<div> <input    type="checkbox"  onClick={()=>Completed(todo)} />
  {todo}</div>
 


<a onClick={() =>  deleteTodo(todo)}><i className="fa-solid fa-trash"></i></a>
    </div>
  )
}
