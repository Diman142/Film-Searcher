import React from 'react'
import classes from "./Video.module.css"


const Video = () => (
  <video autoPlay muted loop id="myVideo" className={classes.Video}>
    <source src="./Videos/phone.mp4" type="video/mp4" />
  </video>
)


export default Video
