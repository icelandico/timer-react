import React from 'react';
import { HeaderStyles } from './Header-styles';
import withStyles from "@material-ui/core/styles/withStyles";

const Header = (props) => {

  const { classes } = props

  return(
    <div className={classes.headerContainer}>
      <h1>Timer App</h1>
    </div>
  )
}

export default withStyles(HeaderStyles)(Header)