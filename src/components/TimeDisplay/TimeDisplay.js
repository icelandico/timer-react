import React, { Component } from 'react';

class TimeDisplay extends Component {

  leadingZero = (number) => {
    return number > 9 ? number : '0' + number
  }

  render() {
    return(
      <div>
        <p className="time-value">{this.leadingZero(this.props.minutes)} : {this.props.seconds === '60' ? '00' : this.leadingZero(this.props.seconds)}</p>
      </div>
    )
  }
}

export default TimeDisplay