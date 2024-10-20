import React from 'react'
import './Button.css'

const Button = ({tgl , btn_name , id}) => {

  return (
    <>
    <button className="button" key={id} onClick={tgl}>
    {btn_name}
    </button>
    </>
  )
}

export default Button