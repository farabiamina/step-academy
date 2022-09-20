import React from "react";

class ClassComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div>
            <h3>Name: {this.props.name}</h3>
            <h3>Age: {this.props.age}</h3>
        </div>
    }
}

ClassComponent.defaultProps = {name: "Anna", age: 30}
export default ClassComponent;