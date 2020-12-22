import React from 'react'
import classes from './FilmItem.module.css'

export const FilmItem = (props) =>
(
  <li>
    <h3>{props.title}</h3>
    <div>
      <img src={props.poster} className={classes.FilmItemImg} alt="poster" />
      <div>
        Year of issue:
        {' '}
        {props.year}
      </div>
      <div>
        imdbID:
        {' '}
        {props.imdbID}
      </div>
    </div>
  </li>
)

