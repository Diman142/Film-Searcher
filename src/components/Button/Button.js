import React from 'react'
import classes from './Button.module.css'

export const Button = ({ title, type, disabled, onClick, submitData }) =>
(
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    disabled={disabled}
    className={classes.Button}
    onClick={(event) => {
      event.preventDefault()
      onClick(submitData)
    }}
  >
    {title}
  </button>
)

