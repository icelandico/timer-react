import React, { Component } from 'react';

class TimeDisplay extends Component {

  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds
  }

  render() {
    return(
      <div>
        <p className="time-value">{this.props.minutes} : {this.props.seconds === '60' ? '00' : this.props.seconds}</p>
      </div>
    )
  }
}

export default TimeDisplay