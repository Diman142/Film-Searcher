/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AppHeader } from '../../components/AppHeader/AppHeader'
import { Load } from '../../components/Loader/Load'
import classes from './FilmPage.module.css'
import AlsoFilm from '../../components/AlsoFilm/AlsoFilm'


const FilmPage = ({ path }) => {

  const [pageInfo, setPageInfo] = useState({})
  const [trailerInfo, setTrailerInfo] = useState({})
  const [bg, setBg] = useState('')
  const [flag, setFlag] = useState(false)


  useEffect(async () => {
    if (path) {
      const resp = await axios.get(`https://imdb-api.com/en/API/Title/k_j7wna0lv/${path}`)
      const trailer = await axios.get(`https://imdb-api.com/en/API/Trailer/k_j7wna0lv/${path}`)
      const img = await axios.get(`https://imdb-api.com/en/API/Images/k_j7wna0lv/${path}`)

      setTrailerInfo({ ...trailer.data })
      setPageInfo({ ...resp.data })
      setBg(img.data.items[0].image)

      if (Object.keys(resp.data).length !== 0) setFlag(true)

    }

  }, [path])


  return (
    <>
      {flag ? (
        <>
          <AppHeader text="Richbee Shows" />
          <main>
            <section className={classes.Page} style={{ backgroundImage: `url(${bg})` }}>
              <div className="container">
                <h1 className={classes.PageTitle}>{pageInfo.title}</h1>
                <div className={classes.PageWrap}>
                  <button className={classes.PageImdb}>{`IMDb ${pageInfo.imDbRating}`}</button>
                  <p className={classes.PageText}>
                    {`${pageInfo.genreList[0].value || "action"}  |  ${pageInfo.type}  |  ${pageInfo.year}`}
                  </p>
                </div>
                <a className={classes.PageWatch} href={trailerInfo.link}>Watch</a>
                <p className={classes.PageNote}>{pageInfo.awards}</p>
              </div>
            </section>

            <section className={classes.Plot}>
              <div className="container">
                <h2 className={classes.PlotTitle}>
                  Watch The
                  {pageInfo.title}
                  {' '}
                  on Richbee Shows
                </h2>
                <p className={classes.PlotText}>
                  {pageInfo.plot}
                </p>

                <h4 className={classes.PlotSubTitle}>You may also like</h4>

                <ul className={classes.PlotList}>

                  {pageInfo.similars.map((item, index) => {
                    if (index < 4) {
                      return <AlsoFilm data={item} key={item.id} />
                    }
                    return null

                  })}
                </ul>
              </div>
            </section>
          </main>
          <footer className={classes.PageFooter}>
            <a href="/" className={classes.PageFooterLink}>Richbee Shows</a>
          </footer>
        </>
      )
        :
        <Load />}
    </>
  )
}




export default FilmPage


