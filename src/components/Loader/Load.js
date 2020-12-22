import React from 'react'
import Loader from 'react-loader-spinner'


export const Load = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  )
}
