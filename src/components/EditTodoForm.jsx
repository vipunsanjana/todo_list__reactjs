import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(value);
        editTodo(value, task.id);
        setValue("");

    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Upadate task today?' onChange={(e) => {
            setValue(e.target.value);
        }} /> 

        <button type='submit' className='todo-btn'>Update Task</button>   
    </form>
  )
}
