import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Todo = ({ todo, todoFunc }) => {
  const changeValue = (e) => {
    todo.data = e.target.value;
  };
  console.log(todo)
  return (
    <ul>
      <li>
        {todo.isEdit ? (
          <input onChange={changeValue}></input>
        ) : (
          todo.data
        )}
        <button
          onClick={() => {
            todoFunc.deleteTodo(todo.id);
          }}
        >delete</button>
        <button
          onClick={() => {
            todoFunc.editStart({ todo});
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
  const [isEdit, setEdit] = useState(false)
  const change = (e) => {
    setContent(e.target.value);
  };
  const add = () => {
    setTodos(
      toDosArr.concat({
        id: toDosArr.length,
        data: content,
        isEdit
      })
    );
    setContent("");
  };
  const deleteTodo = (id) => {
    setTodos(toDosArr.filter((todo) => todo.id !== id));
  };
  const editStart = ({ todo }) => {
    setEdit(true);
    todo.data = "";
    console.log(todo);
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
