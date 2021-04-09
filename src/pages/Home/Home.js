import React from 'react'
import Video from '../../components/Video/Video'
import Form from '../../components/Form/Form'
import FilmList from '../../components/FilmList/FilmList'


const Home = () => (
  <div className="container">
    <Video />
    <h2 className="title">Unlimited movies, TV shows, and more.</h2>
    <p className="note">Watch anywhere. Cancel anytime.</p>
    <Form />
    <FilmList />
  </div>
)

export default Home
