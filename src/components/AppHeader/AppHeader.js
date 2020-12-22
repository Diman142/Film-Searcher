import React from 'react'
import classes from './AppHeader.module.css'

export const AppHeader = (props) => (
  <header className={classes.AppHeader}>
    <h2>{props.text}</h2>
  </header>
)
