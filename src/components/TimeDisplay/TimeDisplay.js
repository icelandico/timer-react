import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { TimeDisplayStyles } from './TimeDisplay-styles';
import PropTypes from 'prop-types';

class TimeDisplayer extends Component {

  leadingZero = (number) => {
    if (number > 9) {
      return number
    } else if (!number) {
      return '00'
    } else {
      return ('0' + number).slice(-2)
    }
  }

  get classes() {
    return this.props.classes
  }

  render() {
    const { isBreak, minutes, seconds, breakMinutes, breakSeconds } = this.props
    const breakStyle = `${this.classes.timeValue} ${this.classes.break}`
    const noBreakStyle = this.classes.timeValue
    return (
      <div className={this.classes.timerDisplay}>
        <p className={isBreak ? breakStyle : noBreakStyle}>{this.leadingZero(minutes)} : {seconds === '60' ? '00' : this.leadingZero(seconds)}</p>
        <p className={isBreak ? noBreakStyle : breakStyle}>{this.leadingZero(breakMinutes)} : {breakSeconds === '60' ? '00' : this.leadingZero(breakSeconds)}</p>
      </div>
    );
  }
}

export const TimeDisplay = withStyles(TimeDisplayStyles)(TimeDisplayer)
export default TimeDisplay