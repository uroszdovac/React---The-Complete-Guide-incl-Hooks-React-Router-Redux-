import React from 'react';
import './App.css';

import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  state = ({
    persons: [
      {name: 'Pera', age: 28},
      {name: 'Zika', age: 65},
      {name: 'Laza', age: 34}
    ],
    username: 'Uros',
  })

  switchNameHandler = () => {
    this.setState({
      persons: [
      {name: 'Pera Peric', age: 28}, 
      {name: 'Zika', age: 605},
      {name: 'Laza Lazarevic', age: 34}
    ]})
  }

  changeName = e => {
    this.setState({
      persons: [
      {name: 'Pera', age: 28},
      {name: e.target.value , age: 65},
      {name: 'Laza', age: 34}
    ]})
  }

  changeHandler = e => {
    this.setState({
      username: e.target.value
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    }
    return (
      <div className="App">
        <h1>Hello</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch name</button>
        <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person change={this.changeName} name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hello</Person>
        <UserInput changeHandler={this.changeHandler} value={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='Uros'/>
      </div>
    );
  }
  
  
}

export default App;
