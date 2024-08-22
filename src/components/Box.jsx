import React from 'react'
import { useState } from 'react'
import '../styles/Box.css'
import Screen from './Screen'
import Buttons from './Buttons'

const Box = () => {
  const [screenDisplay, setScreenDisplay] = useState("0");
  return (
    <div className='box-container'>
      <Screen display={screenDisplay}/>
      <Buttons setScreenDisplay={setScreenDisplay}/>
    </div>
  )
}

export default Box