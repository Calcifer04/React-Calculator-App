import React from 'react'
import '../styles/Screen.css'


const Screen = ({ display }) => {
  return (
    <div className='screen-container'>
        <h3> {display} </h3>
    </div>
  )
}

export default Screen