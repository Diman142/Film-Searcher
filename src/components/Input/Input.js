import React from 'react'
import { connect } from 'react-redux'
import { createRequest } from '../../redux/actions'
import classes from './Input.module.css'

const Input = (props) => {

  return (
    <div>
      <label>
        <h2>{props.title}</h2>
        <input className={classes.Input} type={props.type} value={props.value} onChange={(e) => { props.onChange(e.target.value) }} />
      </label>
    </div>
  )
}

export default Input

