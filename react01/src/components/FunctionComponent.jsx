import React from 'react';

const FunctionComponent = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
        </div>
    );
};

// const FunctionComponent = ({name, age}) => {
//     return (
//         <div>
//             <h3>Name: {name}</h3>
//             <h3>Age: {age}</h3>
//         </div>
//     );
// };

FunctionComponent.defaultProps = {name: "Bob", age: 30};
export default FunctionComponent;