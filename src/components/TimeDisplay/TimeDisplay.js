import React, { Component } from 'react';

class TimeDisplay extends Component {

  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds
  }

  render() {
    return(
      <div>
        Time here
      </div>
    )
  }
}

export default TimeDisplay