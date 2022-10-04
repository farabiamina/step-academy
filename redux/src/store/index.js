import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./CounterReducer";
import {todoReducer} from "./ToDoReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    todoReducer,
    counterReducer
})

export const store = createStore(rootReducer, composeWithDevTools());