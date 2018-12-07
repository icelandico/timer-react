import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import TimeDisplay from '../TimeDisplay/TimeDisplay'

class Display extends Component {

  state = {
    minutes: '',
    seconds: ''
  }

  render() {
    return(
      <div>
        <Settings />
        <TimeDisplay
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
      </div>
    )
  }
}

export default Display
