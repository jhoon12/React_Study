import React, {useState, useCallback} from 'react';
import style from './style'

const ToDoItem = ({ list, removeItem, setEditItem, submitItem, key }) => {
    const [inputValue, inputValueChange] = useState("");
    const changeValue = (e)=>{

      inputValueChange(e.target.value);
    }
    const { content, id, EditCheck } = list;
    return (
      <div>
        {EditCheck ? <div>{content}</div> : <input value={inputValue} onChange={changeValue} placeholder="수정"></input>}
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