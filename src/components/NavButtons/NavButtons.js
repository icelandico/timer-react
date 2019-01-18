import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
// import NavButtonsStyles from './NavButtons-styles'
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  primary: {
    backgroundColor: '#22a',
    fontSize: '1rem'
  }
})

class NavButtonsCmp extends Component {

  get classes() {
    return this.props.classes
  }

  handleStart = () => {
    return this.props.timeRunning ? null : this.props.handleStart();
  }

  handlePause = () => {
    this.props.handlePause();
  }

  handleSetDefault = () => {
    this.props.handleSetDefault();
  }

    render() {
      return(
        <div>
          <Button
            type="button"
            id="start"
            onClick={this.handleStart}
            className={this.classes.primary}
          >
            Start!
          </Button>
          <Button
            type="button"
            id="pause"
            onClick={this.handlePause}
          >
            Pause
          </Button>
          <Button
            type="button"
            id="default"
            onClick={this.handleSetDefault}
          >
            Default Pomodoro
          </Button>
        </div>
      )
    }
  }

export default withStyles(styles)(NavButtonsCmp)
