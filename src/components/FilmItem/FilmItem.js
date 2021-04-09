import { NavLink } from "react-router-dom";
import React from 'react'
import classes from './FilmItem.module.css'


export const FilmItem = ({ poster, title, imdbID, ratio, type, genre, year, awards, getPath }) => (
  <li className={classes.FilmItem}>
    <img src={poster} className={classes.FilmItemImg} alt="poster" />
    <div className={classes.FilmItemRight}>
      <div className={classes.FilmItemTop}>
        <h2 className={classes.FilmItemTitle}>{title}</h2>
        <NavLink
          to={`/${imdbID}`}
          className={classes.FilmItemLink}
          onClick={() => {
            getPath(imdbID)
          }}
          exact
        >
          {`IMDb ${ratio}`}

        </NavLink>
      </div>

      <p className={classes.FilmItemNote}>{`${type}  |  ${genre}  |  ${year}`}</p>
      <span className={classes.FilmItemLine} />

      <p className={classes.FilmItemAward}>{awards}</p>

    </div>
  </li>
)




export default FilmItem
