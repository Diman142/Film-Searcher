import React from 'react'
import { connect } from 'react-redux'
import { FilmItem } from '../FilmItem/FilmItem'
import classes from './FilmList.module.css'
import { setPath } from '../../redux/actions'

const FilmList = (props) => (
  (
    <div>
      {props.data ? (
        <ul className={classes.FilmList}>
          {props.data.map((item) => (
            // eslint-disable-next-line react/no-array-index-key
            <FilmItem title={item.title} year={item.year} poster={item.poster} imdbID={item.id} key={item.id} awards={item.award} genre={item.genre} ratio={item.ratio} type={item.type} getPath={props.getPath} />
          ))}
        </ul>
      ) : <div className={classes.notFound}>No movies found</div>}
    </div>
  )
)

const mapStateToProps = (state) => ({
  data: state.submit.data
})

const mapDispatchToProps = {
  getPath: setPath,
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
