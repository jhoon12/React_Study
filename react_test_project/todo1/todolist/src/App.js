import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Todo = ({ todo, todoFunc }) => {
  const changeValue = (e) => {
    todo.data = e.target.value;
  };
  console.log(todo);
  return (
    <ul>
      <li>
        {todo.isEdit ? <input onChange={changeValue}></input> : todo.data}
        <button
          onClick={() => {
            todoFunc.deleteTodo(todo.id);
          }}
        >
          delete
        </button>
        <button
          onClick={() => {
            todoFunc.editStart(todo.id);
          }}
        >
          Edit
        </button>
      </li>
    </ul>
  );
};
function App() {
  const [toDosArr, setTodos] = useState([]);
  const [content, setContent] = useState("");
  const change = (e) => {
    setContent(e.target.value);
  };
  const add = () => {
    setTodos(
      toDosArr.concat({
        id: toDosArr.length,
        data: content,
        isEdit: false,
      })
    );
    setContent("");
  };
  const deleteTodo = (id) => {
    setTodos(toDosArr.filter((todo) => todo.id !== id));
  };
  const editStart = (id) => {
    // const newState = toDosArr.map((todoObj) =>
    //   todoObj.id !== id ? todoObj : { ...todoObj, isEdit: true }
    // );

    const index = toDosArr.findIndex((obj) => obj.id === id);
    toDosArr[index].isEdit = true;
    setTodos(toDosArr);
  };
  const editEnd = (id) => {};

  const todoFunc = {
    deleteTodo,
    editStart,
    editEnd,
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <input value={content} onChange={change}></input>
      <button onClick={add}>추가하기</button>
      {toDosArr.map((todo) => {
        return <Todo todo={todo} todoFunc={todoFunc}></Todo>;
      })}
    </>
  );
}

export default App;
