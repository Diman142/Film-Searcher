/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import classes from './Input.module.css'

const Input = ({ type, value, onChange }) => (
  <input
    className={classes.Input}
    type={type}
    value={value}
    onChange={(e) => { onChange(e.target.value) }}
  />
)

export default Input


