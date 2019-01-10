import React from 'react';
import './TimeDisplay.css'

  function leadingZero(number) {
    if (number > 9) {
      return number
    } else if (!number) {
      return '00'
    } else {
      return '0' + number
    }
  }

  const TimeDisplay = ({ isBreak, minutes, seconds, breakMinutes, breakSeconds }) => (
    <div className="timer-display">
      <p className={isBreak ? "time-value break" : "time-value"}>{leadingZero(minutes)} : {seconds === '60' ? '00' : leadingZero(seconds)}</p>
      <p className={isBreak ? "time-value" : "time-value break"}>{leadingZero(breakMinutes)} : {breakSeconds === '60' ? '00' : leadingZero(breakSeconds)}</p>
    </div>
  )


export default TimeDisplay