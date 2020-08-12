import React, { useState } from 'react';
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';


const TodoListitem = ({todo, onRemove, onToggle, onEdit, onsubmit, style}) =>{
    const {id, text, checked, Edit} = todo;
    const [inputValue, ValueEdit] = useState('');
    const inputChange = (e)=>{
        ValueEdit(e.target.value)
    }  
    return(
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox',{checked})} onClick={()=> onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    {Edit ? <input value={inputValue} onChange={inputChange}/> : <div className="text">{text}</div>}
                </div>
                <div className="edit" onClick={Edit ? ()=>onsubmit(id, inputValue) : ()=>onEdit(id)}>{Edit ? "수정완료" : "수정하기"}</div>
                <div className="remove" onClick={()=>onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListitem);