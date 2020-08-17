import React from 'react';
import ToDoItem from './ToDoItem.js'

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

export default React.memo(ToDoList)