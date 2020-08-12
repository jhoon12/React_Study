import React from 'react';
import { useCallback } from 'react';
import TodoListitem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const TodoList = ({ todos, onRemove, onToggle, onEdit, onsubmit }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListitem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
          onsubmit={onsubmit}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos, onsubmit, onEdit],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRender}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
