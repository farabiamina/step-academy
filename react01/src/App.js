import React from "react";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import LifeCycle from "./components/LifeCycle";
import Clock from "./components/Clock";

function App() {
  return (
      <div>
          {/*<FunctionComponent name="Alice" age="25" />*/}
          {/*<ClassComponent name="Mary" age="50"/>*/}
          {/*<Counter />*/}
          {/*<ClassCounter number="2"/>*/}
          {/*<LifeCycle />*/}
          <Clock />
      </div>
  );
}

export default App;
