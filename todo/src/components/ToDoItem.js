import React from 'react'

const ToDoItem = (props) => {
    const {
        item,
        dispatch
    } = props

    const onMarkCompleted = e => {
        dispatch({ type: 'MARK_COMPLETED', payload: item })
    }

    return (
        <div onClick = {onMarkCompleted} className={`${item.completed ? "completed todo" : "todo"}`} >
            <p>{item.item}</p>
        </div>
    )        
}

export default ToDoItem