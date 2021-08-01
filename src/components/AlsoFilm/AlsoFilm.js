import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, } from 'react-redux';
import classes from './AlsoFilm.module.css'
import { setPath, } from '../../redux/actions'


const AlsoFilm = ({ data }) => {

  const dispatch = useDispatch()

  return (
    <li className={classes.AlsoFilm} style={{ backgroundImage: `url(${data.image})` }}>
      <div className={classes.AlsoFilmWrap}>
        <h3 className={classes.AlsoFilmTitle}>
          {' '}
          {data.title}
          {' '}
        </h3>
        <p className={`${classes.AlsoFilmGenre} cardText`}>{data.genres}</p>
        <p className={`${classes.AlsoFilmType} cardText`}>{data.fullTitle}</p>
        <p className={`${classes.AlsoFilmDescr} cardText`}>{data.plot}</p>
        <NavLink
          to={`/${data.id}`}
          onClick={() => {
            dispatch(setPath(data.id))
          }}
          className={classes.AlsoFilmLink}
          exact
        >
          IMDb
          {' '}
          {data.imDbRating}
        </NavLink>
      </div>
    </li>
  )
}

export default AlsoFilm
