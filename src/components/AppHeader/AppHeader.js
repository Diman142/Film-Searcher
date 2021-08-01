/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './AppHeader.module.css'

export const AppHeader = (props) => (
  <header className={classes.AppHeader}>
    <div className="container" style={{ height: "100%" }}>
      <div className={classes.AppHeaderWrap}>
        <NavLink className={classes.AppHeaderText} to="/">{props.text}</NavLink>

        <form
          className={classes.AppHeaderForm}
          onSubmit={e => e.preventDefault()}
        >
          <input type="text" className={classes.AppHeaderField} />
          <button className={classes.AppHeaderBtn} type="submit" />
        </form>
      </div>
    </div>
  </header>
)
