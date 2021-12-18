import React from 'react'
import '../Calculator.css'

const Display = props => {
  return (
    <>
      <div className="display">{props.display}</div>
    </>
  )
}

export default Display
