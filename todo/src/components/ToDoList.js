import React from 'react'
import ToDoItem from './ToDoItem'
const ToDoList = props => {
   const {
        todos,
        dispatch
    } = props
    return (
        <div className='todo-container'>
           {todos.map((item) => (
            <ToDoItem
               key = {item.id}
               item = {item}
               dispatch = {dispatch}
               />
           ))}
        </div>
    )

}

export default ToDoList