import React, { useState, useCallback, useRef } from "react";
import * as S from "./style";
import ToDoList from './ToDoList.js'
// import style from './style.js'


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
    <S.Box>
      <S.global/>
      <S.ListBox>
      <S.title>TO DO List</S.title>
        <S.list>
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
        </S.list>
        <ToDoList
            lists={list}
            removeItem={removeItem}
            setEditItem={setEditItem}
            submitItem={submitItem}
        ></ToDoList>
      </S.ListBox>
    </S.Box>
  );
}
export default App;