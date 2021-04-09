import React from 'react'
import Loader from 'react-loader-spinner'
import classes from "./Load.module.css"

export const Load = () => (
  <div style={{ marginTop: "150px" }}>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      className={classes.Load}
    />
  </div>
)
