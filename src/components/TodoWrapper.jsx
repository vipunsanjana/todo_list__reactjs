import React from 'react'
import { TodoForm } from './TodoForm'
import { useState } from 'react'
import {v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {

        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEdditing: false}]);
        console.log(todos);

    }

    const toggleComplete = (id) => {
      setTodos(todos.map((todo) => (
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )))
    }

    const deleteTodo = (id) => {
      setTodos(todos.filter((todo)=> (todo.id !== id) ))
    }

    const editTodo = (id) => {
      setTodos(todos.map((todo) => (todo.id === id ? {...todo, isEdditing: !todo.isEdditing} : todo)))
    }

    const editTask = (task, id) => {
      setTodos(todos.map((todo) => (
        todo.id === id ? {...todo, task, isEdditing: !todo.isEdditing} : todo
      )))
    }

  return (
    <div className='TodoWrapper'>
      <h1>Get ToDo Done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          todo.isEdditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ):(
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
          
        ))}

    </div>
  )
}
