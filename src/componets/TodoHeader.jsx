import React from 'react'

export const TodoHeader = ({todos,completeArr}) => {

 let totaltodo = [...todos,...completeArr]
 let todotodolength = totaltodo.length

 let remaingtodos = todos.length
  return (
    <div>
     <h2>

     TodoApp

     </h2>
     {todotodolength>0 ?<p>{`${remaingtodos} are remainings out of ${todotodolength}`}</p>:null }
     
     </div>
  )
}
