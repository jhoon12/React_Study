import React, { useState, useCallback } from "react";
import * as S from "./style";

const ToDoItem = ({ list, removeItem, setEditItem, submitItem, key }) => {
  const [inputValue, inputValueChange] = useState("");
  const changeValue = (e) => {
    inputValueChange(e.target.value);
  };
  const { content, id, EditCheck } = list;
  return (
    <S.Container>
      {EditCheck ? (
        <div>{content}</div>
      ) : (
        <input
          value={inputValue}
          onChange={changeValue}
          placeholder="수정"
        ></input>
      )}
      <S.Button onClick={() => removeItem(id)}>삭제</S.Button>
      <S.Button
        onClick={() => {
          {
            EditCheck ? setEditItem(id) : submitItem(id, inputValue);
          }
        }}
      >
        {EditCheck ? "수정" : "수정완료"}
      </S.Button>
    </S.Container>
  );
};

export default React.memo(ToDoItem);
