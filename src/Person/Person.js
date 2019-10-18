import React from 'react';

const person = ({age, name, children}) => {
    return (
        <div>
            <p>i'm {name} and I'm a {age} years old !</p>
            <p>{children}</p>
        </div>
    )
}

export default person;