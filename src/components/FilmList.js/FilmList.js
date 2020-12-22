import React from 'react'
import { connect } from 'react-redux'
import { FilmItem } from '../FilmItem/FilmItem'
import classes from './FilmList.module.css'

const FilmList = (props) => (
  <div>
    {props.data ? (
      <ul className={classes.FilmList}>
        {props.data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <FilmItem title={item.Title} year={item.Year} poster={item.Poster} imdbID={item.imdbID} key={item.Title + index} />
        ))}
      </ul>
    ) : <div className={classes.notFound}>No movies found</div>}
  </div>
)

const mapStateToProps = (state) => ({
  data: state.submit.data
})


export default connect(mapStateToProps, null)(FilmList)
