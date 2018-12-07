import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import TimeDisplay from '../TimeDisplay/TimeDisplay'

class Display extends Component {

  state = {
    minutes: '25',
    seconds: '00'
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
