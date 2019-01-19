import React, { Component } from 'react';
import Header from '../Header/Header'
import { AppStyles } from './App-styles';
import Display from '../Display/Display';
import withStyles from "@material-ui/core/styles/withStyles";

class App extends Component {

  get classes() {
    return this.props.classes
  }

  render() {
    return (
      <div className={this.classes.app}>
        <Header />
        <Display />
      </div>
    );
  }
}

export default withStyles(AppStyles)(App);
