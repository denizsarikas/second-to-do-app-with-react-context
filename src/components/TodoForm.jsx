import React, { useState } from 'react'
import { useTodoContext } from '../providers/TodoProvider'

const TodoForm = () => {

    const { todoList, getNumberOfTodoItems, addTodo} = useTodoContext();

    const [todoItem, setTodoItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
       // console.log("new todo " + todoItem)
       addTodo(todoItem)
       setTodoItem("")


      
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Number of todos: {getNumberOfTodoItems()} </h3>
            <input 
            type="text"
            onChange={ (e) => setTodoItem(e.target.value) }
            value ={todoItem}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TodoForm