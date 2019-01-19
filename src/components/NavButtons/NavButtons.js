import React, { Component } from 'react';
import ActionButton from '../StyleComponents/Button';
import withStyles from "@material-ui/core/styles/withStyles";
import { NavButtonsStyles } from './NavButtons-styles'

class NavButtonsComponent extends Component {

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
        <div className={this.classes.main}>
          <ActionButton
            onClick={this.handleStart}
          >
            Start!
          </ActionButton>
          <ActionButton
            onClick={this.handlePause}
          >
            Pause
          </ActionButton>
          <ActionButton
            onClick={this.handleSetDefault}
          >
            Default Pomodoro
          </ActionButton>
        </div>
      )
    }
  }

export const NavButtons = withStyles(NavButtonsStyles)(NavButtonsComponent)
export default NavButtons
