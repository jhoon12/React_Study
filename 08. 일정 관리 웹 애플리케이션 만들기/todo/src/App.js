import React,{useState, useCallback, useRef} from 'react';
import logo from './logo.svg';
import TodoTemplate from './components/TodoTemplate'
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const[todos, setTodos] = useState([
    {
      id: 1,
      text: '리엑트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    }
  ]);
  const nextId = useRef(4)
  const onInsert = useCallback(
    text => {
      const todo ={
        id :  nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;//이게 바뀌니까 되는건가?
    },[todos]
  )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
}

export default App;
