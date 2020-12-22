import React from 'react'
import classes from './FilmList.module.css'
import { FilmItem } from '../FilmItem/FilmItem'
import { connect } from 'react-redux'


const FilmList = (props) => {

  console.log(props)

  return (
    <div>
      {props.data ? <ul className={classes.FilmList}>
        {props.data.map((item, index) => {
          return (
            <FilmItem title={item.Title} year={item.Year} poster={item.Poster} imdbID={item.imdbID} key={item.Title + index} />
          )
        })}
      </ul> : <div className={classes.notFound}>No movies found</div>}
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    data: state.submit.data
  }
}


export default connect(mapStateToProps, null)(FilmList)
