import React from 'react'
import classes from './Button.module.css'

export const Button = (props) =>
(
  <button
    // eslint-disable-next-line react/button-has-type
    type={props.type}
    disabled={props.disabled}
    className={classes.Button}
    onClick={(event) => {
      event.preventDefault()
      props.onClick(props.submitData)
    }}
  >
    {props.title}
  </button>
)

