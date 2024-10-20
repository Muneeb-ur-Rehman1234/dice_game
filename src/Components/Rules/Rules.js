import React, { useState } from 'react'
import './Rules.css'

const Rules = ({show}) => {
    const [list, setlist] = useState([
        { id: 1, rule: "Select any number" },
        { id: 2, rule: "Click on dice image" },
        { id: 3, rule: "after click on  dice  if selected number is equal to dice number you will get same point as dice " },
        { id: 4, rule: "if you get wrong guess then  2 point will be dedcuted " },
    ])
  return (
    <>
    <div id="card" >
        <div id="heading">
            <h3>How to play dice game</h3>
        </div>
        <div className="points">
            <ul>
                {list.map((item,id)=>{
                    return(
                        <li key={id}>{item.rule}</li>
                    )
                })}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Rules