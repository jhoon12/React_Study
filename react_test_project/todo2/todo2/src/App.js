import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import ToDoList from './ToDoList.js'


function App() {
  const [list, setList] = useState([]);
  const id = useRef(0);
  const [inputValue, setInputValue] = useState("");

  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const onInsert = useCallback((inputValue) => {
    const todo = {
      id: id.current++,
      content: inputValue,
      EditCheck: true,
    };
    setList(list => list.concat(todo));// list는 현재 list를 가리림
    setInputValue("");
  }, []);

  const removeItem = useCallback((id) => {
    setList(list.filter((nowId) => nowId.id !== id));
  }, [list]);

  const setEditItem = useCallback((id) => {
    setList(
      list.map((nowtodo) =>
        nowtodo.id === id
        ? { ...nowtodo, EditCheck: false}
        : { ...nowtodo }
      )
    );
  }, [list]);
  
  const submitItem = useCallback((id, inputValue) => {
    setList(
      list.map((nowtodo) => nowtodo.id === id ? {...nowtodo, EditCheck:true, content:inputValue}:{...nowtodo})
    )
  },[list]);

  return (
    <div>
      <input
        onChange={inputValueChange}
        value={inputValue}
        placeholder="입력하기"
      />
      <button
        onClick={() => {
          onInsert(inputValue);
        }}
      >
        추가하기
      </button>
      <ToDoList
        lists={list}
        removeItem={removeItem}
        setEditItem={setEditItem}
        submitItem={submitItem}
      ></ToDoList>
    </div>
  );
}
export default App;