import React, { useState, useCallback, useRef, useEffect } from 'react';
import logo from './logo.svg';
import TodoTemplate from './components/TodoTemplate';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const[todos, setTodos] = useState([
    {
      id: 1,
      text: '리엑트의 기초 알아보기',
      checked: true,
      Edit: false,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
      Edit: false,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
      Edit: false,
    }
  ]);

  const nextId = useRef(4)

  const onInsert = useCallback(
    text => {
      console.log(todos)
      const todo ={
        id :  nextId.current,
        text,
        checked: false,
        Edit: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },[todos]
  )

  const onRemove = useCallback(
    id =>{
      setTodos(todos.filter(todo => todo.id !== id));
    },[todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked}: todo),
      );
    },
    [todos]
  )

  const onEdit = useCallback(
    id=>{
      setTodos(
        todos.map(todo => todo.id === id ?{...todo, Edit:!todo.Edit} : todo)
      )
      console.log(todos);
      },
      [todos]
      )
    const onsubmit = useCallback(
      (id, inputValue)=>{
        setTodos(
          todos.map(todo=> todo.id === id ? {...todo, text:inputValue, Edit:!todo.Edit} : todo)
        )
      },
    )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} onsubmit={onsubmit}/>
    </TodoTemplate>
  );
}

export default App;
