import React from 'react';
import {useState} from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("hello");
    // console.log(counter);
    // let counter = 0;
    // let text = "hello"; надо использовать useState
    function increment() {
        // counter += 1;
        setCounter(counter + 1);
        console.log(counter);
    }
    function textChange(event) {
        // text = event.target.value; так делать неправильно
        setText(event.target.value);
        console.log(text);
    }
    return (
        <div>
            {counter}
            <button onClick={increment}>Увеличить</button>
            <input type="text" value={text}
                   onChange={textChange}
            />
        </div>
    );
};

export default Counter;