import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    (async () => {
      const todos = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodoList(todos.data.slice(0, 5));
    })();
  }, []);

  return todoList ? (
    <ul>
      {todoList.map((todo, index) => {
        return (
          <li style={{ textAlign: 'left' }} key={index} data-testid='todo'>
            {todo.title}
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Loading....</p>
  );
};

export default Todos;
