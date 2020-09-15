const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
let id = 3;

export const changeInput = input => ({type: CHANGE_INPUT, input});
export const insert = text =>({
    type: INSERT,
    todo:{
        id: id++,
        text,
        done: false
    }
})
export const toggle = id => ({
    type: TOGGLE,
    id
})
export const remove = id =>({
    type: REMOVE,
    id
})
//액션 생성 함수
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id:2,
            text: '리엑트와 리덕스 사용하기',
            done: false
        }
    ]
};//기본값

function todos(state = initialState, action){

    switch(action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case TOGGLE:
            return{
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done}: todo)
            }
        case REMOVE:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
            default:
                return state;
    }
}//리듀서
export default todos;