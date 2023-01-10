import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='bg-sky-500 px-8 py-2 rounded-md text-white hover:bg-sky-600 shadow-md hover:scale-x-105 hover:shadow-lg transition-all duration-300 active:bg-sky-800'>{props.children   }</button>
  )
}

export default Button