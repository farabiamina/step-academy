import React from "react";

class Clock extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {date: new Date()};
    }

    // unmount = () => {
    //     root.unmount();
    // }

    press = () => {
        let newClassName = (this.state.class === "on") ? "off" : "on";
        let newLabel = (this.state.label === "Включено") ? "Выключено" : "Включено";
        this.setState({class: newClassName, label: newLabel});
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <p>Time: {this.state.date.toLocaleTimeString()}</p>
                <button onClick={this.unmount}>Unmount</button>
            </div>
        )
    }
}

export default Clock;