import React from 'react'
import classes from './Alert.module.css'

export const Alert = ({ text, onClick }) => (
  <div className={classes.Alert}>
    <span>{text}</span>
    <button type="button" className={classes.Close} onClick={() => onClick()}><span className={classes.Cross}>&times;</span></button>
  </div>
)
