import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { TimeDisplayStyles } from './TimeDisplay-styles';
import PropTypes from 'prop-types';

  function leadingZero(number) {
    if (number > 9) {
      return number
    } else if (!number) {
      return '00'
    } else {
      return ('0' + number).slice(-2)
    }
  }

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
      return (
        <div className={this.classes.timerDisplay}>
          <p className={isBreak ? `${this.classes.timeValue} ${this.classes.break}` : this.classes.timeValue}>{leadingZero(minutes)} : {seconds === '60' ? '00' : leadingZero(seconds)}</p>
          <p className={isBreak ? this.classes.timeValue : `${this.classes.timeValue} ${this.classes.break}`}>{leadingZero(breakMinutes)} : {breakSeconds === '60' ? '00' : leadingZero(breakSeconds)}</p>
        </div>
      );
    }
  }
  

TimeDisplayer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export const TimeDisplay = withStyles(TimeDisplayStyles)(TimeDisplayer)
export default TimeDisplay