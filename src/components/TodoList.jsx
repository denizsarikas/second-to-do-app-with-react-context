import React from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {

  const { todoList, removeTodo } = useTodoContext();

  return (

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => removeTodo(index)}>x</button>
          </li>
        ))}
      </ul>
  );
};

export default TodoList;
