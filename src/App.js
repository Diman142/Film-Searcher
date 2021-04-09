/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import FilmPage from './pages/FilmPage/FilmPage'
import './App.css';



function App({ path }) {

  let routes = (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )

  if (path) {
    routes = (
      <Switch>
        <Route path={`/${path}`} render={(props) => <FilmPage path={path} {...props} exact />} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }

  return (
    <>
      {routes}
    </>
  );
}


const mapStateToProps = (state) => ({
  path: state.goToPage.path,
})



export default withRouter(connect(mapStateToProps, null)(App))



