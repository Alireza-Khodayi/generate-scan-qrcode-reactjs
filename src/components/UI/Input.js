import React from 'react'

const Input = (props) => {
  return (
    <input className=' rounded-md px-4 py-2 ring-1 focus:ring-blue-200 focus:outline-blue-100' value={props.value} placeholder={props.placeholder} type={props.type} onChange={props.onChange}/>
  )
}

export default Input