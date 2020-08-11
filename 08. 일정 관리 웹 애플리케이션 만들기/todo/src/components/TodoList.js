import React from 'react';
import TodoListitem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle, onEdit, onsubmit}) =>{
    return(
        <div className="TodoList">
            {todos.map(todo =>(
                <TodoListitem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit} onsubmit={onsubmit}></TodoListitem>
            ))}
        </div>
    );
};

export default TodoList;