import React from 'react'
import classes from './Popup.module.css'

export const Popup = (props) => {

  return <span className={classes.Popup}>{props.text}</span>
}
