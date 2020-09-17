import React, {useCallback, useState} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import todos, { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from '../components/Tood'
import useActions from '../lib/useActions'
const TodosContainer = () => {
    const {input, todos} = useSelector(({todos})=>({
        input: todos.input,
        todos: todos.todos
    }));
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    )

    // const dispatch = useDispatch();
    // const onChangeInput = useCallback(input => dispatch(changeInput(input)),[dispatch]);
    // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    // const onToggle = useCallback(id => dispatch(toggle(id)),[dispatch]);
    // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);
    
    return(
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        ></Todos>
    )
}
export default React.memo(TodosContainer)