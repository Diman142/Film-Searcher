import React from 'react'
import classes from './Button.module.css'

export const Button = (props) => {

  return (
    <button type={props.type} disabled={props.disabled} className={classes.Button} onClick={(event) => {
      event.preventDefault()
      props.onClick(props.submitData)
    }}>
      {props.title}
    </button>
  )
}
