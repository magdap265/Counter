import React from 'react';
import Button from './Button'
import './App.css';

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
      <div className="content">
        Ustaw wartość.
        <div className="counter">
          <Button 
            value = {'-'}
            click = {this.decrementValue}
          />
          <div className="value">{this.state.value}</div>
          
          <Button 
            value = {'+'}
            click = {this.incrementValue}
          />
        </div>
        
      </div>
    )
  }
}

export default App;
