/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import classes from './Input.module.css'

const Input = (props) => (
  <div>
    <label>
      <h2>{props.title}</h2>
      <input className={classes.Input} type={props.type} value={props.value} onChange={(e) => { props.onChange(e.target.value) }} />
    </label>
  </div>
)

export default Input

