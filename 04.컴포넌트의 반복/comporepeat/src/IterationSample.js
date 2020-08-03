import React, {useState} from 'react';

const IterationSample = ()=>{
    const [names, setNames] = useState([
        {id : 1, text : '눈사람'},
        {id : 2, text : '얼음'},
        {id : 3, text : '눈'},
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const onChange = e => setInputText(e.target.value);
    const plus = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }
    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    const nameList = names.map(name => {console.log("state update")
     return (<><li key={name.id}>{name.text}<button onClick={()=>{onRemove(name.id)}}>remove</button></li></>)})// plus를 클릭했을 때 MAP이 호출이 될까?(아마도 될 듯)
    return (<>
        <input value={inputText} onChange={onChange}></input>
        <button onClick = {plus}>추가</button>
        <ul>{nameList}</ul>
    </>)
}

export default IterationSample