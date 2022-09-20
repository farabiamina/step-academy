import React from "react";
import "../styles/LifeCycle.css";

class LifeCycle extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {class: "on", label: "Включено"};
    }

    press = () => {
        let newClassName = (this.state.class === "on") ? "off" : "on";
        let newLabel = (this.state.label === "Включено") ? "Выключено" : "Включено";
        this.setState({class: newClassName, label: newLabel});
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        return null;
    }

    render() {
        return (
            <div>
                <button className={this.state.class} onClick={this.press}>{this.state.label}</button>
            </div>
        )
    }
}

export default LifeCycle;