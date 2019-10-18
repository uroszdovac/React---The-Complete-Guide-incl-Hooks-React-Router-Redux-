import React, { useState, useEffect } from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
  const [persons, setPersons] = useState(
    [
      {name: 'Pera', age: 28},
      {name: 'Zika', age: 65},
      {name: 'Laza', age: 34}
    ]
  )

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    setPersons([
      {name: 'Pera Peric', age: 28}, 
      {name: 'Zika', age: 605},
      {name: 'Laza Lazarevic', age: 34}
    ])
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={persons[0].name} age={persons[0].age} />
      <Person name={persons[1].name} age={persons[1].age} />
      <Person name={persons[2].name} age={persons[2].age}>Hello</Person>
    </div>
  );
  
}

export default App;
