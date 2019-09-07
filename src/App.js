import React from 'react';
import Button from './Button'
// import './App.css';

class App extends React.Component {
  state = {
    value: 0
  }


  decrementValue = () =>{
    this.setState({value: this.state.value - 1})
    console.log(this.state.value)
  }


  incrementValue= () =>{
    this.setState({value: this.state.value + 1})
    console.log(this.state.value)
  }


  render(){
    return(
      <div>
        Ustaw wartość.

        <Button 
          value = {'-'}
          click = {this.decrementValue}
        />
        {this.state.value}
        <Button 
          value = {'+'}
          click = {this.incrementValue}
        />
      </div>
    )
  }
}

export default App;
