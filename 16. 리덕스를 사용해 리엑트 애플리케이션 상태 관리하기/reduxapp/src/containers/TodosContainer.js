import React from 'react';
import {connect} from 'react-redux';
import {changeInput,insert,toggle,remove} from "../modules/todos";

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
})=>{
    <Todos
        input={input}
        todo={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
    />
};

export default connect(
    state =>({
        input: state.todos.input,
        todos: state.todos.todos
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)(TodosContainer)