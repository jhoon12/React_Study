import React, { useState, useCallback, useRef, useEffect } from 'react';
import logo from './logo.svg';
import TodoTemplate from './components/TodoTemplate';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const createBulkTodos = ()=>{
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      text:`할 일 ${i}`,
      checked: false 
    });
  }
  return array;
}

function App() {
  const[todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501)

  const onInsert = useCallback(
    text => {
      const todo ={
        id :  nextId.current,
        text,
        checked: false,
        Edit: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },[]
  )

  const onRemove = useCallback(
    id =>{
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },[]
  )

  const onToggle = useCallback(
    id => {
      setTodos(
      todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked}: todo),
      );
    },
    []
  )

  const onEdit = useCallback(
    id=>{
      setTodos(todos =>
        todos.map(todo => todo.id === id ?{...todo, Edit:!todo.Edit} : todo)
      )
      },
      []
      )
    const onsubmit = useCallback(
      (id, inputValue)=>{
        setTodos(
          todos=>
          todos.map(todo=> todo.id === id ? {...todo, text:inputValue, Edit:!todo.Edit} : todo)
        )
      },[ ]
    )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} onsubmit={onsubmit}/>
    </TodoTemplate>
  );
}

export default App;
