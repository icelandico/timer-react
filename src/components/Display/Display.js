import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import TimeDisplay from '../TimeDisplay/TimeDisplay'
import NavButtons from '../NavButtons/NavButtons';

class Display extends Component {

  state = {
    minutes: '25',
    seconds: '00'
  }

  handleStart = () => {
    const interval = setInterval(() => {
      
      this.setState({
        minutes: parseInt(this.state.seconds) === 0 ? parseInt(this.state.minutes) - 1 : this.state.minutes,
        seconds: parseInt(this.state.seconds) !== 0 ? parseInt(this.state.seconds) - 1 : 59
      })
    }, 1000)
  }

  render() {
    return(
      <div>
        <Settings />
        <NavButtons 
          handleStart = {this.handleStart}
        />
        <TimeDisplay
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
      </div>
    )
  }
}

export default Display
