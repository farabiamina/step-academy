import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const counter = useSelector(state => state.counterReducer.counter);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoReducer.todos);
  const increment = (payload) => {
      const action = {type: "INCREMENT", payload: payload};
      dispatch(action);
  }
  const decrement = (payload) => {
      const action = {type: "DECREMENT", payload: payload};
      dispatch(action);
  }
  const add_todo = (name) => {
      const new_todo = {
          name,
          id: Date.now()
      }
      dispatch({type: "ADD_TODO", payload: new_todo});
  }
  return (
    <div className="App">
        <div>
            <h1>{counter}</h1>
            <button onClick={() => increment(1)}>Увеличить</button>
            <button onClick={() => decrement(1)}>Уменьшить</button>
            <button onClick={() => add_todo(prompt())}>Добавить ToDo</button>
        </div>
        <div>
            {
                todos.map(t => <p>{t.name}</p>)
            }
        </div>
    </div>
  );
}

export default App;
