import React, { Component } from 'react';

class TimeDisplay extends Component {

  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds
  }

  render() {
    return(
      <div>
        <p className="time-value">{this.state.minutes} : {this.state.seconds}</p>
      </div>
    )
  }
}

export default TimeDisplay