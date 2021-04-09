/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import classes from './Input.module.css'

const Input = (props) => (
  <>
    <input className={classes.Input} type={props.type} value={props.value} onChange={(e) => { props.onChange(e.target.value) }} />
  </>
)

export default Input


