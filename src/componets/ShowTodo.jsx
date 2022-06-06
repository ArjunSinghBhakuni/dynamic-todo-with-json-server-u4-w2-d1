import React from 'react'
import style from "./todo.module.css";
export const ShowTodo = ({value,CompletedTodoDelete ,addTodo}) => {
  return (
    <div className={style.showtodo}>
      <div>
      <input type="checkbox"  onClick={()=> addTodo(value)} />
        {value}

      </div>
       
      <div onClick={() =>  CompletedTodoDelete(value)}><i className="fa-solid fa-trash"></i></div>

        
        </div>
  )
}
