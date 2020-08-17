import React, {useState, useCallback} from 'react';

const ToDoItem = ({ list, removeItem, setEditItem, submitItem, key }) => {
    const [inputValue, inputValueChange] = useState("");
    const changeValue = (e)=>{
      inputValueChange(inputValue => inputValue = e.target.value)
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

export default React.memo(ToDoItem);