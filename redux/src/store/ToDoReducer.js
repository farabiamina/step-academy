const defaultState = {
    todos: [],
}

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload]}
        case "REMOVE_TODO":
            return {...state, todos: state.todos.filter(t => t.id !== action.payload)}
        default:
            return state;
    }
}