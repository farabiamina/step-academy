import React from "react";
import counter from "./Counter";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        // this.increment = this.increment.bind(this);
        // если не стрелочная функция ее необходимо биндить
    }
    incrementCounter = (prevState, props) =>  {
        return {counter: prevState.counter + parseInt(props.number)}
    }

    increment = () => {
        console.log(this);
        this.setState(this.incrementCounter);
        this.setState(this.incrementCounter);
        // this.setState({counter: this.state.counter + parseInt(this.props.number)});
        // this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increment}>Увеличить</button>
            </div>
        );
    }
}

export default ClassCounter;