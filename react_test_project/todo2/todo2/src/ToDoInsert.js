import React, {useState, useCallback} from 'react';
function ToDoInsert({onInsert}){
    const [inputValue, setInputValue] = useState("");

    const inputValueChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    return(
        <div>
            <input onChange={inputValueChange} value={inputValue} />
            <button onClick={()=>{onInsert(inputValue)}}>추가하기</button>
        </div>
    )
}
export default ToDoInsert