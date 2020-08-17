import React, { useState, useCallback, useRef } from "react";
import listBody from "./listBody";
import ToDoInsert from "./ToDoInsert";
import Lists from "./Lists";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const id = useRef(0);
  const [inputValue, setInputValue] = useState("");

  const inputValueChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const onInsert = (inputValue) => {
    const todo = {
      id: id.current++,
      content: inputValue,
      EditCheck: true,
    };
    setList(list.concat(todo));
    setInputValue("");
  };

  const removeItem = (id) => {
    setList(list.filter((nowId) => nowId.id !== id));
  };
  const setEditItem = (id) => {
    setList(
      list.map((nowtodo) =>
        nowtodo.id === id
        ? { ...nowtodo, EditCheck: false}
        : { ...nowtodo }
      )
    );
  };
  const submitItem = (id, inputValue) => {
    setList(
      list.map((nowtodo) => nowtodo.id === id ? {...nowtodo, EditCheck:true, content:inputValue}:{...nowtodo})
    )
  };

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

const ToDoList = ({ lists, removeItem, setEditItem, submitItem }) => {
  return (
    <div>
      {lists.map((list) => {
        return (
          <ToDoItem
            removeItem={removeItem}
            list={list}
            setEditItem={setEditItem}
            submitItem={submitItem}
            key={list.id}
          ></ToDoItem>
        );
      })}
    </div>
  );
};
const ToDoItem = ({ list, removeItem, setEditItem, submitItem, key }) => {
  const [inputValue, inputValueChange] = useState("");
  function changeValue(e){
    inputValueChange(e.target.value)
  }
  const { content, id, EditCheck } = list;
  return (
    <div>
      {EditCheck ? <div>{content}</div> : <input value={inputValue} onChange={changeValue}></input>}
      <button onClick={() => removeItem(id)}>삭제</button>
      <button
        onClick={() => {
          {EditCheck ? setEditItem(id) : submitItem(id, inputValue)}
        }}
      >
        {EditCheck ? "수정" : "수정완료"}
      </button>
    </div>
  );
};
