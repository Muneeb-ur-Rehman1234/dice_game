import React from 'react'
import './Home.css'
import dices from './dices.png'
import Button from '../Button/Button'
const Home = ({toggle}) => {
  return (
    <>
    <div id="main">
        <div id="left">
            <div id="image">
            <img src={dices} alt="diceLOGO" />
            </div>
           
        </div>
        <div id="right">
            <div id="head">
            <h1>DICE GAME</h1>
            <Button tgl={toggle} id="play" btn_name="PLAY NOW" />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Home