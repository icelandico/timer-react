import React, { Component } from 'react';

class TimeDisplay extends Component {

  render() {
    return(
      <div>
        <p className="time-value">{this.props.minutes} : {this.props.seconds === '60' ? '00' : this.props.seconds}</p>
      </div>
    )
  }
}

export default TimeDisplay