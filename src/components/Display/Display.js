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
    alert('CLICKED')
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
