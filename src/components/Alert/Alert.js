import React from 'react'
import classes from './Alert.module.css'

export const Alert = (props) => {

  return (
    <div className={classes.Alert}>
      <span>{props.text}</span>
      <button className={classes.Close} onClick={() => { props.onClick() }}><span className={classes.Cross}>&times;</span></button>
    </div>
  )
}
