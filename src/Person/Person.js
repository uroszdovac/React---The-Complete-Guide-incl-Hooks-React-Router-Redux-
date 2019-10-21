import React from 'react';
import './Person.css'

const person = ({age, name, children, click, change}) => {
    return (
        <div className='Person'>
            <p onClick={click}>i'm {name} and I'm a {age} years old !</p>
            <input type="text" onChange={change} value={name}/>
            <p>{children}</p>
        </div>
    )
}

export default person;